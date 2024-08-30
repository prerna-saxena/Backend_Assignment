const express = require('express');
const { checkStatus } = require('../controllers/statusController');
const router = express.Router();

router.get('/:requestId', checkStatus);

module.exports = router;
