import { Router } from "express";
import { AuthController } from "../../controllers";
import { AsyncWrapper } from "../../utils";

const router = Router();
const authController = new AuthController();

router.post(
  "/sign-up",
  AsyncWrapper(authController.signUp.bind(authController))
);

router.post(
  "/sign-in",
  AsyncWrapper(authController.signIn.bind(authController))
);

export const authRouter = {
  baseUrl: "/auth",
  router,
};
