Ext.define('SmCms.model.Venue', {
    extend: 'Ext.data.Model',
    fields: [
        {name: '_id', type: 'string' },
        {name: 'name', type: 'string'},
        {name: 'qrEntrance', type: 'string'},
        {name: 'qrExit', type: 'string'}
    ],
    associations: [
        {type: 'hasOne', model: 'Coordinates', name: 'coordinates'}
    ],
    clientIdProperty: '_id',
    idProperty: '_id',
    proxy: {
        type: 'rest',
        url: '/api/venues'
    }
});