const asyncHandler = require('express-async-handler');
const { request } = require('./request');
const url = require('url');

module.exports.getttct = asyncHandler(async function getttct(req, res) {
     res.render('thanhtoan-chuyentien');
});


module.exports.postttct = asyncHandler(async function postttct(req, res, next) {
     res.render('thanhtoan-chuyentien');
});