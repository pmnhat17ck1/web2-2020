const asyncHandler = require('express-async-handler');
const { request } = require('./request');
module.exports.getChangePassword = function(req, res, next) {
    res.render('profile', { errors: null });
};

module.exports.postChangePassword = asyncHandler(async function(req, res, next) {

    
});