var myData = [];
(function (){
    myData = [
    ['3m Co'],
    ['Alcoa Inc'],
    ['Altria Group Inc'],
    ['American Express Company'],
    ['American International Group, Inc.'],
    ['AT&T Inc'],
    ['Boeing Co.'],
    ['Caterpillar Inc.'],
    ['Citigroup, Inc.'],
    ['E.I. du Pont de Nemours and Company'],
    ['Exxon Mobil Corp'],
    /* ['General Electric Company'],
    ['General Motors Corporation'],
    ['Hewlett-Packard Co'],
    ['Honeywell Intl Inc'],
    ['Intel Corporation'],
    ['International Business Machines'],
    ['Johnson & Johnson'],
    ['JP Morgan & Chase & Co'],
    ['McDonald\'s Corporation'],
    ['Merck & Co., Inc.'],
    ['Microsoft Corporation'],*/
    ['Pfizer Inc'],
    ['The Coca-Cola Company'],
    ['The Home Depot, Inc.'],
    ['The Procter & Gamble Company'],
    ['United Technologies Corporation'],
    ['Verizon Communications'],
    ['Wal-Mart Stores, Inc.']
    ];
    
    for (var i = 0, l = myData.length, rand = Math.random; i < l; i++) {
        var data = myData[i];
        data[1] = ((rand() * 10000) >> 0) / 100;
        data[2] = ((rand() * 10000) >> 0) / 100;
        data[3] = ((rand() * 10000) >> 0) / 100;
        data[4] = ((rand() * 10000) >> 0) / 100;
        data[5] = ((rand() * 10000) >> 0) / 100;
    }
})();

Ext.define('Dashboard.store.Grid', {
    extend:'Ext.data.ArrayStore',
    model: 'Board.model.Grid',
    data: myData
});