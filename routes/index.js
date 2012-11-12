

module.exports = {
    
    login: function(req, res) {
        res.render('login.jade');
    },
    cms: function (req, res) {
        res.render('cms/index.jade', {layout: 'cms/layout.jade'});
    }
    
}