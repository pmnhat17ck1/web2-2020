const asyncHandler = require('express-async-handler');
const { request } = require('./request');
module.exports.gettransactionhistory = asyncHandler(async function gettransactionhistory(req, res) {
    if (!req.currentUser) {
        return res.redirect('/');
    };
    const History = await request('POST', '/transaction-history', { userId: req.currentUser.id });
    console.log(History.history);
    res.render('transaction-history', { history: History.history });
});


module.exports.posttransactionhistory = asyncHandler(async function posttransactionhistory(req, res, next) {
    // console.log(req.file);
    // res.render('profile');
});