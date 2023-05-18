import { Router } from "express";
import { AuthController } from "../../controllers";
import { AsyncWrapper } from "../../utils";

const router = Router();
const authController = new AuthController();

/**
 * @swagger
 * /auth/sign-up:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               mail:
 *                 type: string
 *               credential:
 *                 type: string
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - credential
 *     responses:
 *       200:
 *         description: Usuario registrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */
router.post(
  "/sign-up",
  AsyncWrapper(authController.signUp.bind(authController))
);
/**
 * @swagger
 * /auth/sign-in:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mail:
 *                 type: string
 *               credential:
 *                 type: string
 *             required:
 *               - mail
 *               - credential
 *     responses:
 *       200:
 *         description: Sesión iniciada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */
router.post(
  "/sign-in",
  AsyncWrapper(authController.signIn.bind(authController))
);

export const authRouter = {
  baseUrl: "/auth",
  router,
};
