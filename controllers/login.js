const asyncHandler = require('express-async-handler');
const { request } = require('./request');
const url = require('url');
module.exports.getlogin = function getlogin(req, res, next) {
    res.render('login');
};

module.exports.postlogin = asyncHandler(async function postlogin(req, res, next) {

    const UserId = await request('POST', '/login', req.body);
    const id = UserId.id;
    console.log(id);
    if (id <= 0) {
        req.session.views = (req.session.views || 0) + 1;
        console.log("count " + req.session.views);
        const url_login = url.parse(req.url);
        if (req.session.views > 3) {
            return res.redirect('/login');
        } else {
            return res.redirect('/');
        }
    }
    req.session.userId = id;
    delete req.session.views;
    res.redirect('/');
});