import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Disney",
      version: "1.0.0",
    },
    basePath: "api/v1",
    host: "localhost",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/v1/*.routes.js", "./routes/auth/*.router.js"],
};

export const swaggerSpec = swaggerJSDoc(options);

export function swaggerMiddleware() {
  return swaggerUi.serveFiles(swaggerSpec);
}
