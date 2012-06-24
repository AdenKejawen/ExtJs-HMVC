Ext.define('AM.config',{
    singleton: true,
    config: {
        name:'Hermes Lazaro Herrera Martinez',
        urlGrid:"resources/movies.json",
        render:function(v) {
            return Ext.String.ellipsis(v, 15, false);
        }
    },
    constructor: function(cfg) {
        this.initConfig(cfg);
    }
})