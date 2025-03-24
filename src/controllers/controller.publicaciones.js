import { pool } from "../database/db.js";


export const getPublicaciones = async (req, res) =>{
    try {

        const { page } = req.params;

        const offset = (page -1) * 5;

        const { rows } = await pool.query("SELECT * FROM publicacion ORDER BY fecha_actualizacion DESC OFFSET $1 LIMIT 5;", [offset]);

        if(rows.length === 0){
            return res.status(404).json({ mensaje: 'UPS! no se encontraron datos por mostrar'})
        }

        res.json(rows);

    } catch (err) {
        res.status(500).json({ mensaje: `UPS! hubo un problema al traer las publicaciones...`, error: err });
    }
}


export const getPublicacionById = async (req, res) =>{
    try {
        const { id } = req.params;
        
        const { rows } = await pool.query("SELECT * FROM publicacion WHERE id = $1;", [id]);

        if(rows.length == 0){
            return res.status(404).json({mensaje: `UPS! Publicación N° ${id} no encontrada.`});
        }

        res.json(rows[0]);
        
    } catch (err) {
        res.status(500).json({ mensaje: `UPS! hubo un problema al querer traer la publicación N° ${id}`, error: err });
    }

}

export const createPublicacion = async (req, res) =>{
    try {
        const data = req.body;

        const { rows } = await pool.query("INSERT INTO publicacion (nombre, apellido, edad, email, comentario, fecha_registro) values ($1, $2, $3, $4, $5, now()) RETURNING *;", [data.nombre, data.apellido, data.edad, data.email, data.comentario]);

        return res.status(200).json({ mensaje: "Publicación registrada.", publicacion: rows[0] });

    } catch (err) {
        
        if(err?.code === "23505"){
            return res.status(409).json({ mensaje: "El correo ya existe en otra publicación." });
        }

        res.status(500).json({ mensaje: `UPS! hubo un problema al crear la publicación ${id}`, error: err });

    }
}


export const deletePublicacion = async (req, res) =>{
    try {
        
        const { id } = req.params;
        
        const { rows, rowCount } = await pool.query("DELETE FROM publicacion WHERE id = $1 RETURNING*;", [id]);

        if(rowCount === 0) return res.status(404).json({ mensaje: `Publicación N° ${id} no encontrada.` });

        return res.json({ mensaje: "Publicación eliminada.", publicacion: rows[0] });

    } catch (err) {
        res.status(500).json({ mensaje: `UPS! hubo un problema al eliminar la publicación ${id}`, error: err });
    }

}


export const updatePublicacion = async (req, res) =>{
    try {

        const { id } = req.params;

        const data = req.body;

        const { rows } = await pool.query("UPDATE publicacion set nombre = $1, apellido = $2, edad = $3, email = $4, comentario = $5, fecha_actualizacion = now() WHERE id = $6 RETURNING*", [data.nombre, data.apellido, data.edad, data.email, data.comentario, id]);

        return res.json({ mensaje: "Publicación actualizada.", usuario:  rows[0] });
         
    } catch (error) {
        res.status(500).json({ mensaje: `UPS! hubo un problema al eliminar la publicacíon ${id}`, error: err });
    }
}