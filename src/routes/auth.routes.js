const { Router } = require('express');
const { authControllers } = require('../controllers');
const { validator, authMiddleware } = require('../middlewares')

const router = Router();
const { requirements, validate } = validator;

router.post('/login', requirements.loginValidator, validate, authControllers.userLogin);
router.post('/register', requirements.registerValidator, validate, authControllers.registerUser);
router.post('/logout', authMiddleware.authenticateUser, authControllers.userLogout);

module.exports = router;