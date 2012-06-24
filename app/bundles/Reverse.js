Ext.define('AM.bundles.Reverse',{
    extend:'Ext.app.Bundle',
    controllers: ['Main'],
    placeholder:{
        selector:'viewport panel[region=north] toolbar'
        //shell:'Main'  by default view/Main.js
    },
    launch:function(){
        console.log('reverse launched');
    }
});


