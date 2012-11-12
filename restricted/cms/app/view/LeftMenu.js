Ext.define('SmCms.view.LeftMenu',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.leftview',
    
    initComponent: function(){
        Ext.apply(this,{
            title: 'Select',
            region:'north',
            split: true,
            height: '100%',
            minSize: 150,
            rootVisible: false,
            autoScroll: true,
            store: 'Menus'
        });
        
        
        this.callParent();
    }
});