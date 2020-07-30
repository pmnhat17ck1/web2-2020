const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');
const { request } = require('./request');

module.exports.getregister = asyncHandler(async function getregister(req, res, next) {
    res.render('register',{ errors: null });
});

module.exports.postregister = asyncHandler(async function postregister(req, res, next) {

    const errors = validationResult(req);
    const loi=errors.errors;
    if (!errors.isEmpty()) {
        return res.render('register', { errors: loi });
    }


    
    const result = await request('POST', '/register', req.body);
    console.log(result.id);
    if (result.id == 0) {
        console.log('register fail');
        return res.render('register');
    } else if (result.id < 0) {
        console.log('req body error');
        return res.render('register');
    }
    console.log('register successfully');
    res.redirect(`/activate/${result.id}`);
});