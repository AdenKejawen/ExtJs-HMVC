Ext.define('Board.controller.Mainboard', {
    extend:'Ext.app.Controller',
    views:['Board.view.Main'],
    stores:['Board.store.Radar','Board.store.Grid'],
    models:['Board.model.Radar'],
    init: function() {
        var me = this;
        me.control({
            'boardgrid' : {
                selectionchange: me.handleSelection
            }
        });
        me.control({
            'mainboard':{
                afterlayout:function(p){p.center()}
            }
        })
    },
    refs: [{
        ref: 'Radar',
        selector: 'chartradar'
    }],
    handleSelection:function(model, records) {
        if (records[0]) {
            var rec = records[0];
            this.application.fireEvent('boardItemSelect',rec);
            this.updateRecord(rec);
        }
    },
    decorate: function(cmp) {
        cmp.add(Ext.create('Board.view.Main'));
    },
    updateRecord : function(rec) {
        var json = [{
            'Name': 'Price',
            'Data': rec.get('price')
        }, {
            'Name': 'Revenue %',
            'Data': rec.get('revenue %')
        }, {
            'Name': 'Growth %',
            'Data': rec.get('growth %')
        }, {
            'Name': 'Product %',
            'Data': rec.get('product %')
        }, {
            'Name': 'Market %',
            'Data': rec.get('market %')
        }];
        this.getRadar().store.loadData(json);
    //selectItem(rec);
    }
});