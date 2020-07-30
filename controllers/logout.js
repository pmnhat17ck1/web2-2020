module.exports.getlogout = function getlogout(req, res, next) {
    delete req.session.userId;
    res.redirect('/');
};