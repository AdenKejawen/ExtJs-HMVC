Ext.define('AM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    initComponent: function() {
        this.items = [{
            region: 'north',
            layout:'fit',
            dockedItems: [{
                xtype: 'toolbar',
                border:false,
                items: []
            }],
            border: false
        }, {
            region: 'center',
            xtype: 'tabpanel', // TabPanel itself has no title
            activeTab: 0,      // First tab active by default
            layout:'fit',
            items:[]
        }]
        this.callParent();
    }
});
