const express = require('express');
const router = express.Router();

router.use('/doc', function doc(req, res, next) {
	res.json({
		data: [],
		message: "API has been deprecated"
	});
});

module.exports = router;