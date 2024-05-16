const { MongoClient, ObjectId } = require('mongodb');

const mongoUrl = process.env.MONGO_URL;
const client = new MongoClient(mongoUrl);

async function getMovies(year = 1981) {
    await client.connect();
    const db = client.db("sample_mflix");
    const moviesCollection = db.collection("movies");

    const movies = await moviesCollection.find({
        year
    })
        .project({
            title: 1
        })
        .toArray();

    return movies;
}

async function getMovieById(id) {
    await client.connect();
    const db = client.db("sample_mflix");
    const moviesCollection = db.collection("movies");

    const movie = await moviesCollection.findOne({
        _id: ObjectId.createFromHexString(id)
    });

    return movie;
}

module.exports = {
    getMovies,
    getMovieById
}