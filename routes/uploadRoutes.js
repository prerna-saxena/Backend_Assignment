API ROUTES

routes/uploadRoutes.js

const express = require('express');
const { uploadCSV } = require('../controllers/uploadController');
const router = express.Router();

router.post('/', uploadCSV);

module.exports = router;
