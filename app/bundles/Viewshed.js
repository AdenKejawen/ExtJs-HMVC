Ext.define('AM.bundles.Viewshed',{
    extend:'Ext.app.Bundle',
    name: 'VS',
    views:['Main'],
    controllers: ['Main'],
    launch:function(){
        console.log('viewshed launched');
    }
});


