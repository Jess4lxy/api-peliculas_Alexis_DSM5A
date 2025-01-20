const pool = require('../config/database'); // Conexión a la base de datos

// Obtener todas las películas
const getMovies = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM movies');
        res.json({
            message: 'Lista de películas',
            data: result.rows,
        });
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener una película por ID
const getMovieByID = async (req, res) => {
    const { id } = req.params; // Extraer el ID de los parámetros de la ruta
    try {
        const result = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: `No se encontró la película con ID: ${id}` });
        }
        res.json({
            message: 'Película encontrada',
            data: result.rows[0],
        });
    } catch (error) {
        console.error(`Error al obtener la película con ID ${id}:`, error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener una película por nombre
const getMovieByName = async (req, res) => {
    const { name } = req.params; // Extraer el nombre de los parámetros de la ruta
    try {
        const result = await pool.query('SELECT * FROM movies WHERE title ILIKE $1', [`%${name}%`]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: `No se encontró ninguna película con el nombre: ${name}` });
        }
        res.json({
            message: 'Películas encontradas',
            data: result.rows,
        });
    } catch (error) {
        console.error(`Error al obtener películas con nombre ${name}:`, error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Agregar una nueva película
const addMovie = async (req, res) => {
    const { title, director, genre, score, rating, year } = req.body; // Datos del cuerpo de la solicitud
    if (!title || !director || !genre || !score || !rating || !year) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    try {
        const result = await pool.query(
            'INSERT INTO movies (title, director, genre, score, rating, year) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [title, director, genre, score, rating, year]
        );
        res.status(201).json({
            message: 'Película agregada exitosamente',
            data: result.rows[0],
        });
    } catch (error) {
        console.error('Error al agregar la película:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Eliminar una película por ID
const deleteMovie = async (req, res) => {
    const { id } = req.params; // Extraer el ID de los parámetros de la ruta
    try {
        const result = await pool.query('DELETE FROM movies WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: `No se encontró la película con ID: ${id}` });
        }
        res.json({
            message: 'Película eliminada exitosamente',
            data: result.rows[0],
        });
    } catch (error) {
        console.error(`Error al eliminar la película con ID ${id}:`, error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Actualizar una película por ID
const updateMovie = async (req, res) => {
    const { id } = req.params; // Extraer el ID de los parámetros de la ruta
    const { title, director, genre, score, rating, year } = req.body; // Datos del cuerpo de la solicitud
    if (!title || !director || !genre || !score || !rating || !year) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    try {
        const result = await pool.query(
            'UPDATE movies SET title = $1, director = $2, genre = $3, score = $4, rating = $5, year = $6 WHERE id = $7 RETURNING *',
            [title, director, genre, score, rating, year, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: `No se encontró la película con ID: ${id}` });
        }
        res.json({
            message: 'Película actualizada exitosamente',
            data: result.rows[0],
        });
    } catch (error) {
        console.error(`Error al actualizar la película con ID ${id}:`, error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getMovies,
    getMovieByID,
    getMovieByName,
    addMovie,
    deleteMovie,
    updateMovie,
};
