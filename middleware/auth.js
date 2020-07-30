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
    // console.log(user.user.id);
    req.currentUser = user.user;
    res.locals.currentUser = user.user;
    // console.log(`user: ${req.currentUser.displayname}`);
    next();
});