const express = require('express');
const router = express.Router();
const {getMovies, getMovieByID, getMovieByName, addMovie, deleteMovie, updateMovie} = require('../controllers/movies.controllers.js');

// movie routes

router.get('/', getMovies);
router.get('/:id', getMovieByID);
router.get('/name/:name', getMovieByName);
router.post('/', addMovie);
router.delete('/:id', deleteMovie);
router.put('/:id', updateMovie);

module.exports = router;