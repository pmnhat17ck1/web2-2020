const asyncHandler = require('express-async-handler');
const { request } = require('./request');


module.exports.getactivate = function(req, res, next) {
    req.session.activateId = req.params.id;
    res.render('activate');
};

module.exports.postactivate = asyncHandler(async function(req, res) {
    if (!req.body.codetoken || req.body.codetoken == null) {
        return res.redirect(`activate/${req.session.activateId}`);
    }
    const check = await request('POST', '/activate', { id: req.session.activateId, codetoken: req.body.codetoken });
    const result = check.resutl;
    if (result != 'success') {
        return res.redirect(`activate/${req.session.activateId}`);
    }
    req.session.userId = req.session.activateId;
    delete req.session.activateId;
    res.redirect('/home/accountmanagement/profile');;
});
