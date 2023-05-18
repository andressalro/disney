import "dotenv/config";

export default class EnvConfig {
  static NODE_ENV = process.env.NODE_ENV;
  static MYSQL_NAME = process.env.MYSQL_NAME;
  static MYSQL_USER = process.env.MYSQL_USER;
  static MYSQL_PASS = process.env.MYSQL_PASS;
  static MYSQL_HOST = process.env.MYSQL_HOST;
  static MYSQL_PORT = process.env.MYSQL_PORT;
  static PORT = process.env.PORT;
  static EMAIL_USER = process.env.EMAIL_USER;
  static EMAIL_PASS = process.env.EMAIL_PASS;
  static EMAIL_HOST = process.env.EMAIL_HOST;
  static EMAIL_PORT = process.env.EMAIL_PORT;

  static get(name) {
    return process.env[name];
  }
}
