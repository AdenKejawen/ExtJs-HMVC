if(!console){
    console={
        log:{}
    }
}
Ext.Loader.setConfig({
    enabled : true
});

Ext.applicationBundle({
    name : 'AM',
    autoCreateViewport : true,
    //controllers : ['tools.Density','map.Maps'],
    bundles : ['Board','AM','Reverse'],
    globalConfig : true,
    launch : function() {
        console.log('App launch');
    }
});
