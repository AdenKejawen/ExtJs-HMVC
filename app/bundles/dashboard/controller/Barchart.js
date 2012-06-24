Ext.define('Dashboard.controller.Barchart', {
    extend:'Ext.app.Controller',
    views:['Board.view.ChartBar'],
    statics:{
        selectedStoreItem:false
    },
    init: function() {
        var me = this;
        me.control({
            'chartbarboard' : {
                refresh:me.refresh
            }
        });
        me.application.on({
            boardItemSelect: me.onSelectItem,
            scope: me
        });
    },
    refs: [{
        ref: 'Bar',
        selector: 'chartbarboard'
    },{
        ref: 'Grid',
        selector: 'boardgrid'
    }],
    handleItemMouseUp:function(item) {
        var series = item.series.chart.series.get(0),
        index = Ext.Array.indexOf(series.items, item),
        selectionModel = this.getGrid().getSelectionModel();
        Dashboard.controller.Barchart.selectedStoreItem = item.storeItem;
        selectionModel.select(index);
    },
    onSelectItem : function(storeItem) {
        var name = storeItem.get('company'),
        series = this.getBar().series.get(0);
        series.unHighlightItem();
        series.cleanHighlights();
        for (var i = 0, items = series.items, l = items.length; i < l; i++) {
            if (name == items[i].storeItem.get('company')) {
                Dashboard.controller.Barchart.selectedStoreItem = items[i].storeItem;
                series.highlightItem(items[i]);
                break;
            }
        }
    },
    refresh:function(barchart){
        var serie = barchart.series.get(0);
        //serie.highlight = false;
        serie.addListener('itemmouseup', this.handleItemMouseUp, this)
    }
});