Ext.define('SmCms.view.venue.VenuesGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.venuesgrid',
    
    plugins: [Ext.create('Ext.grid.plugin.RowEditing')],
    
    initComponent: function() {
        
        this.store = 'Venues';
        
        this.columns = [
            {
                text: 'Name',
                flex: 1,
                dataIndex: 'name'
            },
            {
                text: 'QR at the Entrance',
                flex: 2,
                dataIndex: 'qrEntrance'
            },
            {
                text: 'QR at the Exit',
                flex: 2,
                dataIndex: 'qrExit'
            }
        ];
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items:[{
                text: 'Add',
                iconCls: 'icon-add',
                action: 'addVenue'
            },
            '-',
            {
                text: 'Delete',
                iconCls: 'icon-delete',
                action: 'deleteVenue'
            }]
        }]
        
        this.callParent();
    }
});