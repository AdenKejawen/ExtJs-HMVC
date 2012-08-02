Ext.define('Board.view.Main', {
    extend:'Ext.panel.Panel',
    alias : 'widget.mainboard',
    title:'Datos generales',
    autoScroll:true,
    layout:'border',
    defaults:{
        layout:'fit'
    },
    flex:1.0,
    requires:['Board.view.ChartRadar','Board.view.BoardGrid','Board.view.ChartBar'],
    initComponent: function() {
        this.items = [{
            region:'center',
            flex:0.7,
            xtype:'boardgrid'
        },{
            region:'east',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults:{
                width:100,
                height:300
            },
            flex:0.3,
            bodyPadding: 2,
            items:[{
                flex:0.1,
                xtype:'chartradar'
            },{
                flex:0.2,
                xtype:'chartbarboard'
            },]
        }];
        this.callParent();
    }
});