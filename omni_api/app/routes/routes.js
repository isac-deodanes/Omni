const { Router } = require('express');

const router = Router();

const usuario = require('./usuario.routes');
router.use('/usuario', usuario);

module.exports = router;