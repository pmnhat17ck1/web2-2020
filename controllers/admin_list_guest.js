const asyncHandler = require('express-async-handler');
const { request } = require('./request');

module.exports.getlist_guest = asyncHandler(async function getlist_guest(req, res, next) {

    if (!req.session.userIdAdmin) {
        return res.redirect('/');
    }

    const listuser = await list_guest();


    res.render('admin_list_guest', { user: listuser });
});

module.exports.postlist_guest = asyncHandler(async function postlist_guest(req, res, next) {


    res.render('admin_list_guest');
});


const list_guest = asyncHandler(async function() {
    const listguest = await request('POST', '/admin/list_guest', {});
    return listguest.user.length > 0 ? listguest.user : [];
});