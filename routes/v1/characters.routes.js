import { characterController } from "../../controllers";
import { AsyncWrapper } from "../../utils";

export default (router) => {
  /**
   * @swagger
   * /api/v1/character:
   *   post:
   *     security:
   *       - bearerAuth: []
   *     summary: Crea un personaje.
   *     tags:
   *       - Personajes
   *     requestBody:
   *       content:
   *         'application/json':
   *           schema:
   *             type: object
   *             properties:
   *               nombre:
   *                 description: Nombre del personaje
   *                 type: string
   *               peso:
   *                 description: Peso del personaje
   *                 type: number
   *               edad:
   *                 description: Edad del personaje
   *                 type: number
   *               historia:
   *                 description: Historia del personaje
   *                 type: string
   *               imagen:
   *                 description: Imagen del personaje
   *                 type: string
   *     responses:
   *       '200':
   *         description: Cantidad de registros eliminados.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 nombre:
   *                   type: string
   *                   description: Nombre del personaje.
   *                 edad:
   *                   type: integer
   *                   description: Edad del personaje.
   *                 peso:
   *                   type: number
   *                   description: Peso del personaje.
   *                 historia:
   *                   type: string
   *                   description: Historia del personaje.
   *                 imagen:
   *                   type: string
   *                   description: URL de la imagen del personaje.
   */
  router.post(
    "/character",
    AsyncWrapper(characterController.postCreateCharacter)
  );
  /**
   * @swagger
   * /api/v1/character/{id}:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     summary: Obtiene el detalle de un personaje.
   *     tags:
   *       - Personajes
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID del personaje.
   *     responses:
   *       '200':
   *         description: Detalle del personaje obtenido correctamente.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 nombre:
   *                   type: string
   *                   description: Nombre del personaje.
   *                 edad:
   *                   type: integer
   *                   description: Edad del personaje.
   *                 peso:
   *                   type: number
   *                   description: Peso del personaje.
   *                 historia:
   *                   type: string
   *                   description: Historia del personaje.
   *                 imagen:
   *                   type: string
   *                   description: URL de la imagen del personaje.
   *                 Peliculas:
   *                   type: array
   *                   items:
   *                     type: object
   *                     properties:
   *                       imagen:
   *                         type: string
   *                         description: URL de la imagen de la película.
   *                       titulo:
   *                         type: string
   *                         description: Título de la película.
   *                       createdAt:
   *                         type: string
   *                         format: date-time
   *                         description: Fecha de creación de la película.
   */
  router.get("/character/:id", AsyncWrapper(characterController.getCharacter));
  /**
   * @swagger
   * /api/v1/characters:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     summary: Obtiene listado de personajes.
   *     tags:
   *       - Personajes
   *     parameters:
   *       - in: query
   *         name: name
   *         schema:
   *           type: string
   *         description: Nombre del personaje.
   *       - in: query
   *         name: movie
   *         schema:
   *           type: integer
   *         description: ID de la película asociada al personaje.
   *       - in: query
   *         name: age
   *         schema:
   *           type: integer
   *         description: Edad del personaje.
   *       - in: query
   *         name: weight
   *         schema:
   *           type: number
   *         description: Peso del personaje.
   *     responses:
   *       '200':
   *         description: Lista de personajes obtenida correctamente.
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   nombre:
   *                     type: string
   *                     description: Nombre del personaje.
   *                   imagen:
   *                     type: string
   *                     description: URL de la imagen del personaje.
   */
  router.get("/characters", AsyncWrapper(characterController.getCharacters));
  /**
   * @swagger
   * /api/v1/character/{id}:
   *   delete:
   *     security:
   *       - bearerAuth: []
   *     summary: Elimina un personaje.
   *     tags:
   *       - Personajes
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID del personaje a eliminar.
   *     responses:
   *       '200':
   *         description: Cantidad de registros eliminados.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 count:
   *                   type: integer
   *                   description: Cantidad de registros eliminados.
   */
  router.delete(
    "/character/:id",
    AsyncWrapper(characterController.deleteCharacter)
  );
  /**
   * @swagger
   * /api/v1/character/{id}:
   *   put:
   *     security:
   *       - bearerAuth: []
   *     summary: Edita un personaje.
   *     tags:
   *       - Personajes
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID del personaje a eliminar.
   *     requestBody:
   *       content:
   *         'application/json':
   *           schema:
   *             type: object
   *             properties:
   *               nombre:
   *                 description: Nombre del personaje
   *                 type: string
   *               peso:
   *                 description: Peso del personaje
   *                 type: number
   *               edad:
   *                 description: Edad del personaje
   *                 type: number
   *               Historia:
   *                 description: Historia del personaje
   *                 type: string
   *               imagen:
   *                 description: Imagen del personaje
   *                 type: string
   *     responses:
   *       '200':
   *         description: Cantidad de registros eliminados.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 count:
   *                   type: integer
   *                   description: Cantidad de registros eliminados.
   */
  router.put(
    "/character/:id",
    AsyncWrapper(characterController.putEditCharacter)
  );
};
