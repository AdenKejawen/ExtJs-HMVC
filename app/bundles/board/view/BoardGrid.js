Ext.define('Board.view.BoardGrid', {
    extend:'Ext.grid.Panel',
    alias  : 'widget.boardgrid',
    height:400,
    width:600,
    store: 'Board.store.Grid',
    title:'Company Data',
    columns: [{
        id       :'company',
        flex: 1,
        text   : 'Company',
        sortable : true,
        dataIndex: 'company'
    },{
        text   : 'Price',
        //width    : 75,
        sortable : true,
        dataIndex: 'price',
        align: 'right',
        renderer : 'usMoney'
    },{
        text   : 'Revenue',
        //width    : 75,
        sortable : true,
        align: 'right',
        dataIndex: 'revenue %',
        renderer: AM.config.render
    },{
        text   : 'Growth',
        //width    : 75,
        sortable : true,
        align: 'right',
        dataIndex: 'growth %',
        renderer: AM.config.render
    },{
        text   : 'Product',
        //width    : 75,
        sortable : true,
        align: 'right',
        dataIndex: 'product %',
        renderer: AM.config.render
    },{
        text   : 'Market',
        //width    : 75,
        sortable : true,
        align: 'right',
        dataIndex: 'market %',
        renderer: AM.config.render
    }]
});