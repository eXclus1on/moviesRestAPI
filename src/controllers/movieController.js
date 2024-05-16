const movieDB = require("../db/movieDB");
const baseDomain = process.env.BASE_DOMAIN;

async function getMovies(req, res) {
    const year = parseInt(req.query.year);

    const movies = await movieDB.getMovies(year);
    movies.forEach(function(movie) {
        movie.url = baseDomain + "/movies/" + movie._id;
    });
    res.json(movies);
}

async function getMovieById(req, res) {
    const { id } = req.params;

    console.log(id);

    const movie = await movieDB.getMovieById(id);
    res.json(movie);
}

function postMovie(req, res) {
    res.send("POST movies!!!!!");
}

function putMovieById(req, res) {
    res.send("PUTPUT movies!!!!!");
}

function deleteMovieById(req, res) {
    res.send("DELETE movies!!!!!");
}

module.exports = {
    getMovies,
    getMovieById,
    postMovie,
    putMovieById,
    deleteMovieById
}