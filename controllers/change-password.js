const asyncHandler = require('express-async-handler');
const { request } = require('./request');
module.exports.getChangePassword = function(req, res, next) {
    res.render('change-password');
};

module.exports.postChangePassword = asyncHandler(async function(req, res, next) {

    const password1 = req.body.password1;
    const password2 = req.body.password2;
    const password3 = req.body.password3;

    if (password2 != password3) {
        return res.render('change-password');
    }
    const result = await request('POST', '/change-password', { password1: password1, password2: password2, id: req.session.userId });
    console.log(result.result);
    if (result.result != 'success') {
        res.render('change-password');
    }
    res.redirect(`/`);
});