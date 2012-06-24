Ext.define('Viewshed.controller.Main', {
    extend:'Ext.app.Controller',
    models:['VS.model.Viewshed'],
    views:['VS.view.Main'],
    init: function() {
        var me = this;
        me.control({
            'mainwin' : {
                beforerender: me.handleMainBeforeRender,
                beforeclose: me.handleMainClose
            }
        });
    },
    onLaunch:function(){
        var win = Ext.create('VS.view.Main',{title:'ddd'});
        win.show();
    },
    handleMainBeforeRender: function(win) {
        console.log('Viewshed before render');
    },
    handleMainClose: function(win) {
        console.log('Main close');
    }
});
