const asyncHandler = require('express-async-handler');
const { request } = require('./request');
const url = require('url');

module.exports.getthe = asyncHandler(async function getthe(req, res) {
     res.render('the-horsebank');
});


module.exports.postthe = asyncHandler(async function postthe(req, res, next) {
     res.render('the-horsebank');
});