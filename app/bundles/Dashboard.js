Ext.define('AM.bundles.Dashboard',{
    extend:'Ext.app.Bundle',
    name:'Board',
    placeholder:'viewport > tabpanel[region=center]',
    controllers: ['Mainboard','Barchart'],
    launch:function(){
        console.log('Dashboard launched')
    },
    onMainViewLaunch:function(view){
        console.log(view)
    }
})

