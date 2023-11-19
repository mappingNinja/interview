const express = require('express');
const register = require('../../controllers/users/register');
const login = require('../../controllers/users/login');
const isAdmin = require('../../controllers/users/isAdmin');
const loginMiddleware = require('../../middlewares/authMiddlewares');
// const checkAdmin = require('../../middlewares/adminMiddleware');
const forgetPassword = require('../../controllers/users/forgetPassword');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgetPassword', forgetPassword);
// router.post('/user/checkAdmin', loginMiddleware, checkAdmin, isAdmin);

module.exports = router;