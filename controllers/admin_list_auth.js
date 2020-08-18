const asyncHandler = require('express-async-handler');
const { request } = require('./request');

module.exports.getlist_auth = asyncHandler(async function getlist_auth(req, res, next) {

    if (!req.session.userIdAdmin) {
        return res.redirect('/');
    }

    const acount = await request('POST', '/admin/list/auth', {});

    console.log({ acount: acount });

    res.render('admin_list_auth', { acount: acount.acount, acount1: acount.acount1, verifyPaper: null });
});

module.exports.postlist_auth = asyncHandler(async function postlist_auth(req, res, next) {
    console.log({ body: req.body });
        const verifyPaper = await request('POST', '/admin/list/auth/verifyacount', req.body);
        const acount = await request('POST', '/admin/list/auth', {});
        return res.render('admin_list_auth', { acount: acount.acount, acount1: acount.acount1, verifyPaper: verifyPaper.result });
    

});