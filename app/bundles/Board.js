Ext.define('AM.bundles.Board',{
    extend:'Ext.app.ApplicationBundle',
    //name:'Board',
    //appFolder:'dashboard',
    placeholder:'viewport > tabpanel[region=center]',
    controllers: ['Mainboard','Barchart'],
    launch:function(){
        console.log('Dashboard launched')
    },
    onMainViewLaunch:function(view){
        console.log(view)
    }
})

