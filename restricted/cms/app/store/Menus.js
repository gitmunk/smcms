Ext.define('SmCms.store.Menus',{
    extend: 'Ext.data.TreeStore',
    proxy : {
        type: 'ajax',
        url: '/files/cms/menus.json'
    }
});