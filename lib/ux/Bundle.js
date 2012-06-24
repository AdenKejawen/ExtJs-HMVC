Ext.define('Ext.app.Bundle', {
    extend: 'Ext.app.Controller',
    appFolder: null,

    /**
     * Creates new Application.
     * @param {Object} [config] Config object.
     */
    constructor: function(config) {
        config = config || {};
        Ext.apply(this, config);

        var requires = config.requires || [];
        
        this.appFolder = this.appFolder || (this.application.appFolder + '/bundles/' + this.id.toLowerCase());
        
        if(this.name)
            Ext.Loader.setPath(this.name, this.appFolder);
        
        if(this.id)
            Ext.Loader.setPath(this.id, this.appFolder);

        if (this.paths) {
            Ext.Object.each(this.paths, function(key, value) {
                Ext.Loader.setPath(key, value);
            });
        }

        this.callParent(arguments);

        var controllers = Ext.Array.from(this.controllers),
        ln = controllers && controllers.length,
        i, controller;

        this.controllers = Ext.create('Ext.util.MixedCollection');

        for (i = 0; i < ln; i++) {
            requires.push(this.getModuleClassName(controllers[i], 'controller'));
        }
        
        Ext.require(requires,function() {
            for (i = 0; i < ln; i++) {
                controller = this.getController(controllers[i]);
                controller.init(this);
            }
            this.onBeforeLaunch.call(this);
            return true;
        }, this);
    },
    init:Ext.emptyFn,
    handleResponse:Ext.emptyFn,
    onMainViewLaunch:Ext.emptyFn,
    control: function(selectors, listeners, controller) {
        this.application.control(selectors, listeners, controller);
    },
    launch: Ext.emptyFn,

    /**
     * @private
     */
    onBeforeLaunch: function() {
        var me = this;
        //auxiliar inner function 
        var viewInjection = function(name,container){
            var view = me.getView(name);
            if(!view)
                throw 'Bundle '+ me.name +' not define main view'
            var instance = view.create();
            container.add(instance);
            me.onMainViewLaunch.call(me.scope || me, instance);
            me.fireEvent('mainViewLaunch', me);
        }
        
        if(this.placeholder && Ext.isString(this.placeholder)){
            this.placeholder = {
                selector:this.placeholder
            }
        }
        
        if (this.placeholder && this.placeholder.selector) {
            var selector = {},
            nameView = this.placeholder.shell || 'Main';
            // view discovery
            var selecteds = Ext.ComponentQuery.query(this.placeholder.selector);
            if(selecteds.length > 0 && selecteds[0].add){
                viewInjection(nameView,selecteds[0])
            }else{//if not render atach event to render
                selector[this.placeholder.selector] = {
                    afterrender:function(cmp){
                        if(cmp){
                            viewInjection(nameView,cmp)
                        }
                    }
                }
                this.control(selector, null, this);
            }
        }
        
        this.launch.call(this.scope || this);
        this.launched = true;
        this.fireEvent('launch', this);
        this.controllers.each(function(controller) {
            controller.onLaunch(this);
        }, this);
    },

    getModuleClassName: function(name, type, byAll) {
        var namespace = Ext.Loader.getPrefix(name);
        if (namespace.length > 0 && namespace !== name) {
            return name;
        }
        var assocClasses;
        if(byAll){
            assocClasses = [this.id + '.' + type + '.' + name,
            (this.name)? this.name + '.' + type + '.' + name: '.~'];
        }else{
            assocClasses = this.id + '.' + type + '.' + name
        }
        return assocClasses;
    },

    getController: function(name) {
        var controller = this.controllers.get(this.id + name);
        if (!controller) {
            controller = Ext.create(this.getModuleClassName(name, 'controller'), {
                application: this.application,
                id: this.id + name
            });
            this.controllers.add(controller);
        }
        return controller;
    },

    getStore: function(name) {
        var store = Ext.StoreManager.get(this.id + name);
        if (!store) {
            var className;
            store = this.getModuleClassName(name, 'store', true);
            if(Ext.ClassManager.isCreated(store[0])){
                className = store[0];
            }
            if(Ext.ClassManager.isCreated(store[1])){
                className = store[1];
            }
            store = Ext.create(className, {
                storeId: this.id + name
            });
        }
        return store;
    },

    getModel: function(model) {
        model = this.getModuleClassName(model, 'model', true);
        return Ext.ModelManager.getModel(model[0])||Ext.ModelManager.getModel(model[1]);
    },

    getView: function(view) {
        view = this.getModuleClassName(view, 'view', true);
        return Ext.ClassManager.get(view[0])||Ext.ClassManager.get(view[1]);
    }
});