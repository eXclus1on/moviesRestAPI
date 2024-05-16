require("dotenv").config();
const express = require("express");
const cors = require("cors");
const movieRouter = require("./routes/movieRouter");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/movies", movieRouter);

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});