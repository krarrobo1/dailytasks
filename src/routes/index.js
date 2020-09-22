const router = require('express')();

const taskRoutes = require('./task.routes');
const userRoutes = require('./user.routes');

router.use('/user', userRoutes);
router.use('/task', taskRoutes);

module.exports = router;