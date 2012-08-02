Ext.define('AM.bundles.Reverse',{
    extend:'Ext.app.ApplicationBundle',
    controllers: ['Main'],
    bundles:['Viewshed'],
    placeholder:'viewport panel[region=north] toolbar',
    launch:function(){
        console.log('reverse launched');
    }
});


