Ext.define('SmCms.view.RightContainer', {
   extend: 'Ext.panel.Panel',
   uses: [],
   alias: 'widget.rightcontainer',
   id: 'rightContainer',
   layout: 'card',
   initComponent: function(){
        
        Ext.apply(this, {
            layout: 'fit',
            title: 'Data',
            region:'center',
            split: true,
            autoScroll: true,
            //items:[{]
        });
        
        this.callParent();
    }
    
});