Ext.define('SmCms.model.Product', {
    extend: 'Ext.data.Model',
    fields: [
        {name: '_id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'logo', type: 'string'},
        {name: 'barcodes', type: 'string'},
        {name: 'brand', type: 'string'},
        {name: 'category', type: 'string'},
        {name: 'subcategory', type: 'string'},
        {name: 'active', type: 'boolean'},
    ],
    clientIdProperty: '_id',
    idProperty: '_id'
});