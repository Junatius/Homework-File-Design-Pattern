const { Router } = require('express');
const { userControllers } = require('../controllers');
const { authMiddleware } = require('../middlewares');
const { validator } = require('../middlewares')

const router = Router();
const { requirements, validate } = validator;

router.get(
    '/', 
    authMiddleware.authenticateUser, 
    authMiddleware.checkUserRole('Administrator'), 
    (req, res) => { 
        userControllers.getAllUsers(req, res);
});

router.delete(
    '/:id',
    authMiddleware.authenticateUser,
    authMiddleware.checkUserRole('Administrator'),
    (req, res) => {
        userControllers.deleteUserById(req, res);
    }
);

router.put(
    '/edit/:id',
    authMiddleware.authenticateUser,
    requirements.updateValidator,
    validate,
    userControllers.updateUserById
);

module.exports = router;