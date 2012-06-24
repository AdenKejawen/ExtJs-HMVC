Ext.define('AM.config',{
    singleton: true,
    config: {
        name:'Hermes Lazaro Herrera Martinez',
        country:'Cuba',
        city:'Mayabeque',
        webSocket:'ws://10.12.167.235:1337',
        /*coords*/
        extent:[-86.90332046875,17.971332734375,-72.00585953125,25.288227265625],
        center:[-79.45459,21.62978],
        render:function(v) {
            return v + '%';
        }
    },
    constructor: function(cfg) {
        this.initConfig(cfg);
    }
})