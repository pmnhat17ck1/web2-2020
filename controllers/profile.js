const asyncHandler = require('express-async-handler');
const { request } = require('./request');

module.exports.getprofile = asyncHandler(async function getprofile(req, res) {
    if (req.currentUser) {

        const Acount = await profile(req.currentUser.id);
        console.log(Acount);
        return res.render('profile', { errors: null, acount: Acount });
    }
    res.redirect('/');
});


module.exports.postprofile = asyncHandler(async function postprofile(req, res, next) {
    const password1 = req.body.password1;
    const password2 = req.body.password2;
    const Acount = await profile(req.currentUser.id);

    // console.log(Paper);
    const result = await request('POST', '/change-password', { password1: password1, password2: password2, id: req.currentUser.id });
    console.log(result.result);
    res.render('profile', { errors: result.result, acount: Acount });
});

const profile = asyncHandler(async function(id) {
    const Acount = await request('POST', '/profile', { userId: id });
    return Acount.profile.length > 0 ? Acount.profile : [];
});