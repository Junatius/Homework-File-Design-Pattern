const { Router } = require('express');
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const movieRoutes = require('./movie.routes');

const router = Router();

router.use('/movies', movieRoutes);
router.use('/auth', authRoutes);
router.use('/users', userRoutes);

module.exports = router;