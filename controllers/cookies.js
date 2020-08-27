const asyncHandler = require('express-async-handler');
const { request } = require('./request');
module.exports.getIndex = asyncHandler(async function(req, res) {
    // const verify = await verifypaper(); 
    // console.log(verify);
    res.render('index', );
});