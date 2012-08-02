Ext.define('Reverse.controller.Main', {
    extend:'Ext.app.Controller',
    views:['Reverse.view.Main'],
    models:['Reverse.model.Test'],
    init: function() {
        var me = this;
        me.control({
            'bundlereverse' : {
                beforerender : me.handleBeforeRender,
                click:me.handleMainClick
            }/*,
            'viewport panel[region=north] toolbar':{
                afterrender:me.decorate
            }*/
        });
    },
    handleBeforeRender: function(win) {
        console.log('Reverse Before Render');
    },
    handleMainClick:function(){
        alert('Reverse Click');
    },
    decorate: function(cmp) {
        cmp.add(Ext.create('Reverse.view.Main'));
    }
});
