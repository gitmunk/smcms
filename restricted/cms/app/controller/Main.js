Ext.define('SmCms.controller.Main',{
    extend: 'Ext.app.Controller',
    
    models: [],
    stores: ['Menus'],
    views: [],
    
    refs: [{
        ref: 'dataContainer',
        selector: '#rightContainer'
    }],
    
    init: function() {
        var me = this;
        this.control({
            leftview:  {
                select: function (self, record) {
                    me.distributeEvent(record.getData().id)
                }
            }
        });
    },
    
    distributeEvent: function (id) {
        this.application.fireEvent(id+"Selected");
    }
});