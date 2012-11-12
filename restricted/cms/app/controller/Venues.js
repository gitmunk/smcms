Ext.define('SmCms.controller.Venues',{
    extend: 'Ext.app.Controller',
    
    models: ['Venue', 'Region'],
    stores: ['Venues', 'Regions'],
    requires: ['SmCms.view.venue.VenuesGrid'],
    
    refs: [{
        ref: 'dataContainer',
        selector: '#rightContainer'
    },{
        ref: 'venuesGrid',
        selector: 'venuesgrid',
        autoCreate: true,
        xtype:'venuesgrid'
    }],
    
    init: function() {
        var me = this;
        this.control({
            'venuesgrid': {
                selectionchange: this.gridSelectionChange,
                viewready: this.onViewReady
            }
        });
        
        this.application.on('venuesSelected', function () {
            me.showVenues();
        });
        
        this.application.on('regionsSelected', function () {
            me.showRegions();
        });
    },
    
    gridSelectionChange: function(model, records) { 
        if (records[0]) {
             this.getVenuesForm().getForm().loadRecord(records[0]);
        }
    },
    
    showVenues: function () {
        console.log('showing venues')
        var container = this.getDataContainer();
        var grid = this.getVenuesGrid();
        
        container.add(grid);
    },
    
    showRegions: function () {
        console.log('show regions')
        
    }
});