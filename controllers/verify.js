const asyncHandler = require('express-async-handler');
const { request } = require('./request');

module.exports.getverify = function getverify(req, res, next) {
    res.render('verify');
};

module.exports.postverify = asyncHandler(async function postverify(req, res, next) {
    const result = await request('POST', '/verify', { userid: req.currentUser.id || null, papers: req.body.papers, typepaper: req.body.typepaper });
    console.log(result);
    if (result.result != 'success') {
        return res.redirect('verify');
    }
    res.redirect(`/`);
});