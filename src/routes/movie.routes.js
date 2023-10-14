const { Router } = require('express');
const { movieControllers } = require('../controllers');
const { authMiddleware } = require('../middlewares');
const { validator } = require('../middlewares')

const router = Router();
const { requirements, validate } = validator;

router.get(
    '/', 
    authMiddleware.authenticateUser, 
    (req, res) => {
        movieControllers.getAllMovies(req, res);
    }
);

router.post(
    '/create',
    authMiddleware.authenticateUser,
    authMiddleware.checkUserRole('Administrator'),
    requirements.createValidator,
    validate,
    movieControllers.createMovie
);

router.put(
    '/edit/:id',
    authMiddleware.authenticateUser,
    authMiddleware.checkUserRole('Administrator'),
    requirements.updateValidator,
    validate,
    movieControllers.updateMovieById
);

router.delete(
    '/delete/:id',
    authMiddleware.authenticateUser,
    authMiddleware.checkUserRole('Administrator'),
    (req, res) => {
        movieControllers.deleteMovieById
    }
);

module.exports = router;