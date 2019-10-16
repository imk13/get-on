const express = require('express');
const docRoute = require('./document.route');
const quesRoute = require('./question.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/doc
 */

router.use('/document', docRoute);

router.use('/question', quesRoute);

module.exports = router;