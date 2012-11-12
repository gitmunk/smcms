Ext.define('SmCms.view.Viewport',{
    extend: 'Ext.container.Viewport',
    
    uses: [
        'SmCms.view.LeftMenu',
        'SmCms.view.RightContainer'
    ],
    
    initComponent: function(){
        
        Ext.apply(this, {
            layout: 'border',
            items: [{
                xtype: 'box',
                id: 'header',
                region: 'north',
                html: '<h1>ShopMunk CMS</h1>',
                height: 30
            },{
                layout: 'border',
                id: 'layout-browser',
                region:'west',
                border: true,
                split:true,
                margins: '2 0 5 5',
                width: 275,
                minSize: 100,
                maxSize: 500,
                items: [{
                    xtype: 'leftview'   
                }]
            },{
                xtype: 'rightcontainer',
                region: 'center',
                margins: '2 5 5 5',
            }]
            
        });
        
        this.callParent();
    }
});