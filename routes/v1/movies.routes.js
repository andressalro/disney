import { AsyncWrapper } from "../../utils";
import { moviesController } from "../../controllers";
export default (router) => {
  router.post("/movie", AsyncWrapper(moviesController.postCreateMovie));
  router.get("/movie/:id", AsyncWrapper(moviesController.getMovie));
  router.get("/movies", AsyncWrapper(moviesController.getMovies));
  router.delete("/movie/:id", AsyncWrapper(moviesController.deleteMovie));
  router.put("/movie/:id", AsyncWrapper(moviesController.putEditMovie));
};
