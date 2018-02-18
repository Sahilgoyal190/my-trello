const router = require('express').Router();

router.use('/boards', require('./boards'));

module.exports = router;