Ext.Loader.setConfig({
    enabled:true
});
Ext.applicationBundle({
    name: 'AM',
    autoCreateViewport: true,
    controllers: [],
    bundles:[
    /*'Viewshed',*/'Reverse','Dashboard','AM'
    ],
    globalConfig:true,
    launch: function() {
        console.log('App launch');
    }
});

