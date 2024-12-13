const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/', loginController.login);
router.get('/session', loginController.session);
router.post('/logout', loginController.logout);

module.exports = router;