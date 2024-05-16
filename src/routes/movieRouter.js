const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.getMovies);
router.get("/:id", movieController.getMovieById);
router.post("/", movieController.postMovie);
router.put("/:id", movieController.putMovieById);
router.delete("/:id", movieController.deleteMovieById);

module.exports = router;
