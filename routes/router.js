const express = require('express');
const { getIndex } = require('../controllers/cookies');

const { getlogin, postlogin } = require('../controllers/login');
const { getactivate, postactivate } = require('../controllers/activate');
const { getlogout } = require('../controllers/logout');
// const { getprofile, postfile } = require('../controllers/profile');
// const { getTodo, postTodo } = require('../controllers/todo');
const { getregister, postregister } = require('../controllers/register');
const { getverify, postverify } = require('../controllers/verify');
const { getopensaving, postopensaving } = require('../controllers/open-saving');
const { getlistsaving, postlistsaving } = require('../controllers/list-saving');

const { get_ct_otp_email, post_ct_otp_email } = require('../controllers/ct_otp_email');
const { get_gt_otp_email, post_gt_otp_email } = require('../controllers/gt_otp_email');

const { gettranfer, posttranfer } = require('../controllers/tranfer');
const { gettranferinbank, posttranferinbank } = require('../controllers/tranfer-in-bank');

const { getChangePassword, postChangePassword } = require('../controllers/change-password');
const { getForgetPassword, postForgetPassword } = require('../controllers/forget-password');
const { validate } = require('../controllers/validator');

const { getprofile, postprofile } = require('../controllers/profile');
const { gettransactionhistory, posttransactionhistory } = require('../controllers/transaction-history');
// index chua dang nhap
const { getguitien, postguitien } = require('../controllers/gui-tien');
const { getvayvon, postvayvon } = require('../controllers/vay-von');
const { getthe, postthe } = require('../controllers/the-horsebank');
const { getttct, postttct } = require('../controllers/thanhtoan-chuyentien');

// admin
const { getloginadmin, postloginadmin } = require('../controllers/admin_login');
const { getindexadmin, postindexadmin } = require('../controllers/admin_index');
const { getlist_auth, postlist_auth } = require('../controllers/admin_list_auth');
const { getlist_guest, postlist_guest } = require('../controllers/admin_list_guest');
const { getupdate_info_guest, postupdate_info_guest } = require('../controllers/admin_update_info_guest');
const router = express.Router();
router.get('/', getIndex);


router.get('/login', getlogin);
router.post('/login', postlogin);

router.get('/activate/:id', getactivate);
router.post('/activate', postactivate);
router.get('/logout', getlogout);

const upload = require('../middleware/upload');
router.use(upload.array('avatar', 2));

// index khi da logins
router.get('/home/accountmanagement/profile', getprofile);
router.post('/home/accountmanagement/profile', postprofile)

router.get('/home/accountmanagement/transaction-history', gettransactionhistory)
router.post('/home/accountmanagement/transaction-history', posttransactionhistory)

router.get('/home/tranfer/in-the-bank', gettranferinbank);
router.post('/home/tranfer/in-the-bank', posttranferinbank);

router.get('/home/saving/open-saving', getopensaving);
router.post('/home/saving/open-saving', postopensaving)

router.get('/home/saving/list-saving', getlistsaving);
router.post('/home/saving/list-saving', postlistsaving)

router.get('/ct_otp_email/:send/:receive', get_ct_otp_email);
router.post('/ct_otp_email', post_ct_otp_email);

router.get('/gt_otp_email', get_gt_otp_email);
router.post('/gt_otp_email', post_gt_otp_email)

router.get('/register', getregister);
router.post('/register', validate.validateRegisterUser(), postregister);
router.get('/verify', getverify);

router.post('/verify', validate.validateVerifyUser(), postverify);

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
// admin

router.get('/admin/login', getloginadmin);
router.post('/admin/login', postloginadmin);


router.get('/admin/index', getindexadmin);
router.post('/admin/index', postindexadmin);


router.get('/admin/list_auth', getlist_auth);
router.post('/admin/list_auth', postlist_auth);

router.get('/admin/list_guest', getlist_guest);
router.post('/admin/list_guest', postlist_guest);

router.get('/admin/admin_update_info', getupdate_info_guest);
router.post('/admin/admin_update_info', postupdate_info_guest);
module.exports = { router };