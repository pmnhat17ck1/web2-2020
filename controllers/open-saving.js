const asyncHandler = require('express-async-handler');
const { request } = require('./request');
module.exports.getopensaving = asyncHandler(async function getopensaving(req, res, next) {

    if (req.currentUser == null) {
        return res.redirect('/');
    }
    const inforAcount = await listAcountSaving(req.currentUser.id);;

    res.render('open-saving', { errors: null, listAcount: inforAcount.listAcount, listPeriod: inforAcount.listPeriod });
});

module.exports.postopensaving = asyncHandler(async function postopensaving(req, res, next) {

    console.log(req.body);

    const result = await request('POST', '/opensaving', {
        body: req.body,
        userId: req.currentUser.id
    });
    console.log(result);
    if (result.result != 'success') {
        const inforAcount = await listAcountSaving(req.currentUser.id);
        return res.render('open-saving', { errors: result.result, listAcount: inforAcount.listAcount, listPeriod: inforAcount.listPeriod });
    }
    res.redirect('/home/accountmanagement/profile');
});

const listAcountSaving = asyncHandler(async function(id) {
    return await request('POST', '/listacountsaving', { userid: id });
});