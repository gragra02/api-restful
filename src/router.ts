import { Router, Request, Response } from "express";
import { createMovie, findMovieById, getAllMovies, removeMovie, updataMovie } from "./controllers/movieController";

// validations
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidations";

const router = Router();

export default router
  .get("/teste", (req: Request, res: Response) => {
    res.status(200).send("API Working");
  })
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id", findMovieById)
  .get("/movie/", getAllMovies)
  .delete("/movie/:id", removeMovie)
  .patch("/movie/:id", movieCreateValidation(), validate, updataMovie);
