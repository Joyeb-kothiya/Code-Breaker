const express = require('express');
const router = express.Router();
const { runCode } = require('../controllers/compileController');
const { validateRunRequest } = require('../utils/validators');

// POST /api/run - Execute code
router.post('/run', validateRunRequest, runCode);

module.exports = router;
