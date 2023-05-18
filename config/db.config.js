import { Sequelize } from "sequelize";
import { errorHandler } from "../utils/error-handler";
import EnvConfig from "./env.config";

export const sequelize = new Sequelize(
  EnvConfig.MYSQL_NAME,
  EnvConfig.MYSQL_USER,
  EnvConfig.MYSQL_PASS,
  {
    host: EnvConfig.MYSQL_HOST,
    dialect: "mysql",
    port: EnvConfig.MYSQL_PORT,
  }
);

export const connectDb = async () => {
  try {
    const sequeliz = new Sequelize(
      EnvConfig.MYSQL_NAME,
      EnvConfig.MYSQL_USER,
      EnvConfig.MYSQL_PASS,
      {
        host: EnvConfig.MYSQL_HOST,
        dialect: "mysql",
        port: EnvConfig.MYSQL_PORT,
      }
    );
    await sequeliz.authenticate();
  } catch (error) {
    throw errorHandler(error.message);
  }
};
