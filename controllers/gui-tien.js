const asyncHandler = require('express-async-handler');
const { request } = require('./request');
const url = require('url');

module.exports.getguitien = asyncHandler(async function getguitien(req, res, next) {
     res.render('gui-tien');
});


module.exports.postguitien = asyncHandler(async function postguitien(req, res, next) {
     res.render('gui-tien');
});