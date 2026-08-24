const mysql = require('../config/mysql');

const crear = async (data) => {
    const [result] = await mysql.execute(
            'INSERT INTO usuario (id_rol, nombre, email, estado) VALUES (?, ?, ?, ?)', 
            [2, data.nombre, data.email, 'activo']
    );

    const [row] = await mysql.query('SELECT * FROM usuario WHERE id = ?', [result.insertId]);
    return row;
}

const obtener = async () => {
    const [rows] = await mysql.query(`
        SELECT 
            u.id,
            u.nombre, 
            u.email, 
            u.estado, 
            r.nombre as rol 
        FROM  usuario u
        INNER JOIN rol r
            ON u.id_rol = r.id
        ORDER BY u.nombre asc;
    `);
    return rows;
}

const borrar = async (id) => {
    await mysql.query('DELETE FROM usuario WHERE id = ?', [id]);
}

module.exports = {
    crear,
    obtener,
    borrar
}