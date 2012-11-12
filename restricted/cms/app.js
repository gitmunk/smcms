Ext.application({
    name: 'SmCms',
    paths: {
        'SmCms' : '/files/cms/app'
    },
    controllers: [
        'Main',
        'Venues',
        'Campaigns'
    ],
    autoCreateViewport: true
});