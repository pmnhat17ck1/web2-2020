const asyncHandler = require('express-async-handler');
const { request } = require('../controllers/request');
module.exports = asyncHandler(async function auth(req, res, next) {

    const userId = req.session.userId;

    res.locals.currentUser = null;

    if (!userId) {
        return next();
    }
    const user = await request('POST', '/auth', { id: userId });
    // const u = JSON.stringify(user.user);
    if (user == null) {
        return next();
    }
    req.currentUser = user.user;
    res.locals.currentUser = user.user;

    const verify = await verifypaper(req, res);

    res.locals.verify = verify;
    next();
});

verifypaper = asyncHandler(async function(req, res) {
    if (!req.currentUser) {
        return null;
    }
    const verify = await request('POST', '/verifypaper', { id: req.currentUser.id });
    return verify.verify;
});