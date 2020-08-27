const asyncHandler = require('express-async-handler');
const { request } = require('./request');
const url = require('url');
module.exports.getlogin = function getlogin(req, res, next) {
    res.render('login', { errors: null });
};

module.exports.postlogin = asyncHandler(async function postlogin(req, res, next) {

    const UserId = await request('POST', '/login', req.body);
    const id = UserId.id;
    console.log(id);
    if (id == 0) {
        return res.render('login', { errors: UserId.result });
    }
    req.session.userId = id;
    res.redirect('/home/accountmanagement/profile');
});