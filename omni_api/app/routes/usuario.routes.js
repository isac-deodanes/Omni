const { Router } = require('express');

const router = Router();

const usuario = require('../controller/usuario.controller');
router.post('/crear', usuario.crearUsuario);
router.get('/obtener', usuario.obtenerUsuario);
router.delete('/eliminar/:id', usuario.borrarUsuario);

module.exports = router;