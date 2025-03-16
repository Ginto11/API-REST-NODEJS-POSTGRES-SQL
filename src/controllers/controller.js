import { pool } from "../database/db.js";


export const getUsers = async (req, res) =>{
    try {

        const { page } = req.params;

        const offset = (page -1) * 5;

        const { rows } = await pool.query("SELECT * FROM usuario ORDER BY id DESC OFFSET $1 LIMIT 5;", [offset]);
        res.json(rows);

    } catch (error) {
        console.error(error);
    }
}


export const getUserById = async (req, res) =>{
    try {
        const { id } = req.params;
        
        const { rows } = await pool.query("SELECT * FROM usuario WHERE id = $1;", [id]);

        if(rows.length == 0){
            return res.status(404).json({mensaje: `Usuario con id = ${id}, no encontrado.`});
        }

        res.json(rows[0]);
        
    } catch (error) {
        console.error(error);
    }

}

export const createUser = async (req, res) =>{
    try {
        const data = req.body;

        const { rows } = await pool.query("INSERT INTO usuario (nombre, apellido, edad, email, comentario) values ($1, $2, $3, $4, $5) RETURNING *;", [data.nombre, data.apellido, data.edad, data.email, data.comentario]);

        return res.status(200).json({ mensaje: "Usuario registrado.", usuario: rows[0] });

    } catch (error) {
        
        if(error?.code === "23505"){
            return res.status(409).json({ mensaje: "El correo ya existe." });
        }

    }
}


export const deleteUser = async (req, res) =>{
    try {
        
        const { id } = req.params;
        
        const { rows, rowCount } = await pool.query("DELETE FROM usuario WHERE id = $1 RETURNING*;", [id]);

        if(rowCount === 0) return res.status(404).json({ mensaje: `Usuario con id = ${id}, no encontrado.` });

        return res.json({ mensaje: "Usuario eliminado.", usuario: rows[0] });

    } catch (error) {
        console.error(error);
    }

}


export const updateUser = async (req, res) =>{
    try {

        const { id } = req.params;

        const data = req.body;

        const { rows } = await pool.query("UPDATE usuario set nombre = $1, apellido = $2, edad = $3, email = $4, comentario = $5 WHERE id = $6 RETURNING*", [data.nombre, data.apellido, data.edad, data.email, data.comentario, id]);

        return res.json({ mensaje: "Usuario actualizado.", usuario:  rows[0] });
         
    } catch (error) {
        console.error(error);
    }
}