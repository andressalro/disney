import "dotenv/config";

export default class EnvConfig {
  static NODE_ENV = process.env.NODE_ENV;
  static MYSQL_NAME = process.env.MYSQL_NAME;
  static MYSQL_USER = process.env.MYSQL_USER;
  static MYSQL_PASS = process.env.MYSQL_PASS;
  static MYSQL_HOST = process.env.MYSQL_HOST;
  static MYSQL_PORT = process.env.MYSQL_PORT;
  static PORT = process.env.PORT;

  static get(name) {
    return process.env[name];
  }
}
