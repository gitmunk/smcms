Ext.define('SmCms.model.Region', {
    extend: 'Ext.data.Model',
    fields: ['_id','name'],
    associations: [
        {type: 'hasMany', model: 'Venue', name: 'venues'}
    ],
    clientIdProperty: '_id',
    idProperty: '_id'
});