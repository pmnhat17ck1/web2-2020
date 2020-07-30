const asyncHandler = require('express-async-handler');
const { request } = require('./request');
const url = require('url');

module.exports.getvayvon = asyncHandler(async function getvayvon(req, res) {
     res.render('vay-von');
});


module.exports.postvayvon = asyncHandler(async function postvayvon(req, res, next) {
     res.render('vay-von');
});