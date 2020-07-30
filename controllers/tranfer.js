const asyncHandler = require('express-async-handler');
const { request } = require('./request');

module.exports.gettranfer =asyncHandler(async function gettranfer(req, res, next) {

    if(req.currentUser == null){
        return res.redirect('/');
    }
    const listacount = await request('POST', '/acountnumber', {userid : req.currentUser.id});


    console.log(listacount);
    res.render('tranfer',{listacountnumber :listacount.listAcountNumber[0].acountnumber });
});

module.exports.posttranfer = asyncHandler(async function posttranfer(req, res, next) {
    const result = await request('POST', '/tranfer', req.body);
    // console.log(result);
    // if (result.result != 'success') {
    //     return res.redirect('tranfer');
    // }
    res.redirect(`/`);
});