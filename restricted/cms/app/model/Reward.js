Ext.define('SmCms.model.Reward', {
    extend: 'Ext.data.Model',
    fields: [
        {name: '_id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'logo', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'useDescription', type: 'string'},
        {name: 'useType', type: 'string'}
    ],
    clientIdProperty: '_id',
    idProperty: '_id'
});