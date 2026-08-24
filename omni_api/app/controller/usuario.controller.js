const { crear, obtener, borrar } = require('../service/usuario');

const crearUsuario = async (req, res) => {
    try {
        const data = req.body;
        
        const resultado = await crear(data);

        return res.status(200).json({
            estado: 200,
            usuario: resultado,
            mensaje: 'Usuario agreado correctamente'
        });
    } catch (error) {
        return res.status(400).json({
            estado: 400,
            mensaje: 'Error al guardar usuario'
        });
    }
}

const obtenerUsuario = async (req, res) => {
    try {
        const resultado = await obtener();
        return res.status(200).json({
            estado: 200,
            usuarios: resultado,
            mensaje: 'Usuarios obtenidos correctamente'
        });
    } catch (error) {
        return res.status(400).json({
            estado: 400,
            mensaje: 'Error al obtener usuario'
        });
    }
}

const borrarUsuario = async(req, res) => {
    try {
        const id = req.params.id;
        await borrar(id);
        return res.status(200).json({
            estado: 200,
            mensaje: 'Usuarios borrado correctamente'
        });
    } catch (error) {
        return res.status(400).json({
            estado: 400,
            mensaje: 'Error al borrar usuario'
        });
    }
}

module.exports = {
    crearUsuario,
    obtenerUsuario,
    borrarUsuario
}