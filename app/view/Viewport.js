
Ext.define('AM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    initComponent: function() {
        this.items = [{
            region: 'north',
            dockedItems: [{
                xtype: 'toolbar',
                border:false,
                items: [{
                    id:'ss',
                    xtype: 'tbtext',
                    html:'<img src ="resources/images/logo.gif" width="30px" height="16px"/> Microsycas'
                }]
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
