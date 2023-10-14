const { Router } = require('express');
const { authControllers } = require('../controllers');
const { validator } = require('../middlewares')

const router = Router();
const { requirements, validate } = validator;

router.post('/login', requirements.loginValidator, validate, authControllers.userLogin);
router.post('/register', requirements.registerValidator, validate, authControllers.registerUser);

module.exports = router;

