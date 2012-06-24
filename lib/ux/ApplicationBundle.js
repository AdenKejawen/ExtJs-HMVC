Ext.define('Ext.app.ApplicationBundle', {
    extend: 'Ext.app.Controller',

    requires: [
    'Ext.ModelManager',
    'Ext.data.Model',
    'Ext.data.StoreManager',
    'Ext.tip.QuickTipManager',
    'Ext.ComponentManager',
    'Ext.app.EventBus'
    ],

    /**
     * @cfg {String} name The name of your application. This will also be the namespace for your views, controllers
     * models and stores. Don't use spaces or special characters in the name.
     */

    /**
     * @cfg {Object} scope The scope to execute the {@link #launch} function in. Defaults to the Application
     * instance.
     */
    scope: undefined,

    /**
     * @cfg {Boolean} enableQuickTips True to automatically set up Ext.tip.QuickTip support.
     */
    enableQuickTips: true,

    /**
     * @cfg {String} defaultUrl When the app is first loaded, this url will be redirected to.
     */

    /**
     * @cfg {String} appFolder The path to the directory which contains all application's classes.
     * This path will be registered via {@link Ext.Loader#setPath} for the namespace specified in the {@link #name name} config.
     */
    appFolder: 'app',

    /**
     * @cfg {Boolean} autoCreateViewport True to automatically load and instantiate AppName.view.Viewport
     * before firing the launch function.
     */
    autoCreateViewport: false,
    globalConfig:false,
    /**
     * Creates new Application.
     * @param {Object} [config] Config object.
     */
    constructor: function(config) {
        config = config || {};
        Ext.apply(this, config);

        var requires = config.requires || [];

        Ext.Loader.setPath(this.name, this.appFolder);

        if (this.paths) {
            Ext.Object.each(this.paths, function(key, value) {
                Ext.Loader.setPath(key, value);
            });
        }            
        
        this.callParent(arguments);

        this.eventbus = Ext.create('Ext.app.EventBus');

        var controllers = Ext.Array.from(this.controllers),
        ln = controllers && controllers.length,
        i, controller,bundle;

        this.controllers = Ext.create('Ext.util.MixedCollection');
        
        if (this.autoCreateViewport) {
            requires.push(this.getModuleClassName('Viewport', 'view'));
        }

        for (i = 0; i < ln; i++) {
            requires.push(this.getModuleClassName(controllers[i], 'controller'));
        }
        
        var bundles = Ext.Array.from(this.bundles);
        this.bundles = Ext.create('Ext.util.MixedCollection');
        for (i = 0; i < bundles && bundles.length; i++) {
            requires.push(this.name + '.bundles.' + bundles[i]);
        }

        Ext.require(requires);

        Ext.onReady(function() {
            for (i = 0; i < controllers.length; i++) {
                controller = this.getController(controllers[i]);
                controller.init(this);
            }
            for (i = 0; i < bundles.length; i++) {
                bundle = this.getBundle(bundles[i]);
                bundle.init(this);
            }
            
            this.onBeforeLaunch.call(this);
        }, this);
        
    },

    control: function(selectors, listeners, controller) {
        this.eventbus.control(selectors, listeners, controller);
    },

    /**
     * Called automatically when the page has completely loaded. This is an empty function that should be
     * overridden by each application that needs to take action on page load
     * @property launch
     * @type Function
     * @param {String} profile The detected {@link #profiles application profile}
     * @return {Boolean} By default, the Application will dispatch to the configured startup controller and
     * action immediately after running the launch function. Return false to prevent this behavior.
     */
    launch: Ext.emptyFn,

    /**
     * @private
     */
    onBeforeLaunch: function() {
        if (this.enableQuickTips) {
            Ext.tip.QuickTipManager.init();
        }

        if (this.autoCreateViewport) {
            this.getView('Viewport').create();
        }

        this.launch.call(this.scope || this);
        this.launched = true;
        this.fireEvent('launch', this);

        this.controllers.each(function(controller) {
            controller.onLaunch(this);
        }, this);
    },

    getModuleClassName: function(name, type) {
        var namespace = Ext.Loader.getPrefix(name);

        if (namespace.length > 0 && namespace !== name) {
            return name;
        }

        return this.name + '.' + type + '.' + name;
    },

    getController: function(name) {
        var controller = this.controllers.get(name);
        if (!controller) {
            controller = Ext.create(this.getModuleClassName(name, 'controller'), {
                application: this,
                id: name
            });
            this.controllers.add(controller);
        }
        return controller;
    },
    
    loadBundle:function(name, callback){
        var modClass = this.getModuleClassName(name, 'bundles');
        Ext.require(modClass,function(){
            var bundle = this.getBundle(name);
            if(typeof(callback) == 'function'){
                callback(bundle);
            }
        },this);
    },
    
    getBundle: function(name) {
        var bundle = this.bundles.get(name);
        if (!bundle) {
            bundle = Ext.create(this.getModuleClassName(name, 'bundles'), {
                application: this,
                id: name
            });
            this.bundles.add(bundle);
        }
        return bundle;
    },

    getStore: function(name) {
        var store = Ext.StoreManager.get(name);

        if (!store) {
            store = Ext.create(this.getModuleClassName(name, 'store'), {
                storeId: name
            });
        }

        return store;
    },

    getModel: function(model) {
        model = this.getModuleClassName(model, 'model');
        return Ext.ModelManager.getModel(model);
    },

    getView: function(view) {
        view = this.getModuleClassName(view, 'view');
        return Ext.ClassManager.get(view);
    }
});

Ext.applicationBundle = function(config) {
    
    if(config.globalConfig == true){
        Ext.Loader.setPath(config.name, config.appFolder || 'app');
        Ext.require(config.name + '.config');
    }
    Ext.onReady(function() {
        Ext.globalApp = Ext.create('Ext.app.ApplicationBundle', config);
    });
};