const asyncHandler = require('express-async-handler');
const { request } = require('./request');

module.exports.getindexadmin = asyncHandler(async function getindexadmin(req, res, next) {

    if (!req.session.userIdAdmin) {
        return res.redirect('/admin/login');
    }
    const moneyTotal = await money_total();
    console.log(moneyTotal.totalDate);
    res.render('admin_index', { total: moneyTotal });
});

module.exports.postindexadmin = asyncHandler(async function postindexadmin(req, res, next) {
    res.render('admin_index');
});


const money_total = asyncHandler(async() => {
    return moneyTotal = await request('POST', '/admin/index', {});
});