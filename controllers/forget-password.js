const asyncHandler = require('express-async-handler');
const { request } = require('./request');
module.exports.getForgetPassword = function(req, res, next) {
    res.render('forget-password');
};

module.exports.postForgetPassword = asyncHandler(async function(req, res, next) {
    const result = await request('POST', '/forget-password', req.body);
    console.log(result.result);
    if (result.result != 'success') {
        res.render('forget-password');
    }
    res.redirect('/login');
});