const express = require('express');
const docRoute = require('./document.route');
const quesRoute = require('./question.route');

const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));

router.use('/document', docRoute);

router.use('/question', quesRoute);

module.exports = router;