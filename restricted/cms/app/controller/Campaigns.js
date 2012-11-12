Ext.define('SmCms.controller.Campaigns',{
    extend: 'Ext.app.Controller',
    
    models: ['Product', 'Reward', 'Rule', 'Campaign'],
    stores: ['Campaigns'],
    views: [],
    
    refs: [{
        ref: 'dataContainer',
        selector: '#rightContainer'
    }],
    
    init: function() {
        var me = this;
        this.control({
            
        });
        
        this.application.on('campaignsSelected', function () {
            me.showCampaigns();
        });
        
        this.application.on('productsSelected', function () {
            me.showProducts();
        });
    },
    
    showCampaigns: function () {
        console.log('campaigns selected')
        
    },
    
    showProducts: function () {
        console.log('products selected')
    
    }
});