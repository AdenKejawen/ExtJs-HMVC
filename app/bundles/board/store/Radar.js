Ext.define('Board.store.Radar', {
    extend: 'Ext.data.JsonStore',
    model: 'Board.model.Radar',
    data: [{
        'Name': 'Price',
        'Data': 100
    }, {
        'Name': 'Revenue %',
        'Data': 100
    }, {
        'Name': 'Growth %',
        'Data': 100
    }, {
        'Name': 'Product %',
        'Data': 100
    }, {
        'Name': 'Market %',
        'Data': 100
    }]
});
