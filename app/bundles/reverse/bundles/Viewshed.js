Ext.define('Reverse.bundles.Viewshed',{
    extend:'Ext.app.ApplicationBundle',
    name: 'VS',
    appFolder:'vshed',
    views:['Main'],
    controllers: ['Main'],
    bundles:['AM'],
    launch:function(){
        console.log('viewshed launched');
    }
});


