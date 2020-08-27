module.exports.getlogout = function getlogout(req, res, next) {
    delete req.session.userId;
    res.redirect('/');
};

module.exports.getadminlogout = function(req, res, next) {
    delete req.session.userIdAdmin;
    res.redirect('/admin/login');
};