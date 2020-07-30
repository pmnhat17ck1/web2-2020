const { body } = require('express-validator');

const validateRegisterUser = function() {
    return [
        body('username', 'username does not Empty').not().isEmpty(),
        body('username', 'username must be Alphanumeric').isAlphanumeric(),
        body('username', 'username more than 6 degits').isLength({min : 6}),
        body('email', 'Invalid does not Empty').not().isEmpty().normalizeEmail(),
        body('email', 'Invalid email').isEmail(),
        body('displayname').trim().notEmpty(),
        body('cmnd').trim().notEmpty(),
        body('cmnd', 'cmnd more than 9 degits').isLength( 9 ),
        body('daterange', 'Invalid birthday').isISO8601('yyyy-mm-dd'),
        body('password', 'password more than 6 degits').isLength({ min: 6 })
    ];
}


const validate = {
    validateRegisterUser: validateRegisterUser,
};

module.exports = { validate };