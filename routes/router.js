const express = require('express');
const { getIndex } = require('../controllers/cookies');
const { getlogin, postlogin } = require('../controllers/login');
const { getactivate, postactivate } = require('../controllers/activate');
const { getlogout } = require('../controllers/logout');
// const { getprofile, postfile } = require('../controllers/profile');
// const { getTodo, postTodo } = require('../controllers/todo');
const { getregister, postregister } = require('../controllers/register');
const { getverify, postverify } = require('../controllers/verify');
const { gettranfer, posttranfer } = require('../controllers/tranfer');
const { getChangePassword, postChangePassword } = require('../controllers/change-password');
const { getForgetPassword, postForgetPassword } = require('../controllers/forget-password');
const { validate } = require('../controllers/validator');
// const upload = require('../middleware/upload');



// index chua dang nhap
const { getguitien, postguitien } = require('../controllers/gui-tien');
const { getvayvon, postvayvon } = require('../controllers/vay-von');
const { getthe, postthe } = require('../controllers/the-horsebank');
const { getttct, postttct } = require('../controllers/thanhtoan-chuyentien');
//
const router = express.Router();
router.get('/', getIndex);

router.get('/login', getlogin);
router.post('/login', postlogin);

router.get('/activate/:id', getactivate);
router.post('/activate', postactivate);
router.get('/logout', getlogout);

// router.get('/profile', getprofile);
// router.post('/profile', upload.single('avatar'), postfile);

// router.get('/todo', getTodo);
// router.post('/todo', postTodo);

router.get('/register', getregister);
router.post('/register', validate.validateRegisterUser(), postregister);
router.get('/verify', getverify);
router.post('/verify', postverify);

router.get('/tranfer', gettranfer);
router.post('/tranfer', posttranfer);

router.get('/change-password', getChangePassword);
router.post('/change-password', postChangePassword);

router.get('/forget-password', getForgetPassword);
router.post('/forget-password', postForgetPassword);


//index chua dang nhap route
router.get('/gui-tien', getguitien);
router.post('/gui-tien', postguitien);

router.get('/the-horsebank', getthe);
router.post('/the-horsebank', postthe);

router.get('/vay-von', getvayvon);
router.post('/vayvon', postvayvon);

router.get('/thanhtoan-chuyentien', getttct);
router.post('/thanhtoan-chuyentien', postttct);
module.exports = { router };