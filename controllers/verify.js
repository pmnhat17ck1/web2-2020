const asyncHandler = require('express-async-handler');
const { request } = require('./request');
const { validationResult } = require('express-validator');
var _ = require('lodash');
const path = require('path');
module.exports.getverify = function getverify(req, res, next) {
    res.render('verify', { errors: null });
};

module.exports.postverify = asyncHandler(async function postverify(req, res, next) {




    console.log({ body: req.body, file: req.files });

    if (!req.files) {
        return res.render('verify', { errors: 'Quý khách chưa gửi avatar' });
    }

    const errors = validationResult(req);
    const loi = errors.errors;
    console.log(errors.errors);
    if (!errors.isEmpty()) {
        const err = loi[0].msg;
        return res.render('verify', { errors: err });
    }
    const result = await request('POST', '/verify', { userid: req.currentUser.id || null, papers: req.body.papers, typepaper: req.body.typepaper, file: req.files[0].filename + " " + req.files[1].filename });
    console.log(result);
    if (result.result != 'success') {
        return res.render('verify', { errors: result.result });
    }
    res.redirect(`/`);
});