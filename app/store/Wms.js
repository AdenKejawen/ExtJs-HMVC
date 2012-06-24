
Ext.define('AM.store.Wms', {
    extend: 'Ext.data.Store',
    requires: ['AM.model.wmsGrid.Wms'], 
    models: ['AM.model.wmsGrid.Wms'],
    //autoLoad: true,
    proxy: {
        type: 'ajax',
        url:'http://10.12.163.235/cgi-bin/mapserv?map=/home/hermes/cuba/userMaps/Base.map&SERVICE=WMS&REQUEST=GetCapabilities',
        reader: {
            type: 'wmscapabilities'
        }
    }
});
