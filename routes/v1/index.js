import { Router } from "express";
import setCharactersV1 from "./characters.routes";
import setMoviesV1 from "./movies.routes";
import { RouteProtectorMiddleware } from "../../middlewares";

const router = Router();

router.use(new RouteProtectorMiddleware().authenticate());

setCharactersV1(router);
setMoviesV1(router);

export const routerV1 = {
  baseUrl: "/api/v1",
  router,
};
