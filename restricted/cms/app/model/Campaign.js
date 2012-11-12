Ext.define('SmCms.model.Campaign', {
    extend: 'Ext.data.Model',
    fields: [
        {name: '_id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'active', type: 'boolean'},
        {name: 'startDate', type: 'date'},
        {name: 'endDate', type: 'date'},
    ],
    associations: [
        {type: 'hasOne', model: 'Rewads', name: 'reward'},
        {type: 'hasMany', model: 'Rule', name: 'rules'},
        {type: 'hasMany', model: 'Region', name: 'regions'},
        {type: 'hasMany', model: 'Venue', name: 'venues'},
    ],
    clientIdProperty: '_id',
    idProperty: '_id'
});