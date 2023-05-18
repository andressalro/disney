import "dotenv/config";
import jwt from "jsonwebtoken";
import PasswordService from "./password.service";
import EnvConfig from "../../config/env.config";
import User from "../../models/user.model";
import { errorHandler } from "../../utils/error-handler";

export default class UserAuthService {
  #passwordService;
  #envConfig;

  constructor() {
    this.#passwordService = new PasswordService(10);
    this.#envConfig = EnvConfig;
  }

  async signUp(user) {
    try {
      const usr = user;
      const hashedPassword = await this.#passwordService.hash(usr.credential);

      usr.credential = hashedPassword;
      const insertUser = await User.create(usr);

      return this.generateAccessToken(insertUser.dataValues);
    } catch (error) {
      throw errorHandler(error.message, 400);
    }
  }

  async signIn(mail, credential) {
    const user = await User.findOne({ where: { mail } });

    if (!user) return null;
    if (
      (await this.#passwordService.check(
        credential,
        user.dataValues.credential
      )) === true
    ) {
      return this.generateAccessToken(user.dataValues);
    }

    return null;
  }

  generateAccessToken(user) {
    "use strict";
    if (!user) throw new Error("Please enter valid user");

    let userData = null;

    // use block of code to forbid from upper-level method code
    {
      // nullify credential
      userData = { ...user, credential: null };

      // remove credential property
      delete userData.credential;

      // make immutable
      Object.freeze(userData);
    }

    const jwtPayload = {
      user: userData,
    };

    const token = jwt.sign(
      jwtPayload,
      this.#envConfig.get("JWT_TOKEN_SECRET"),
      {
        algorithm: "HS256",
        issuer: this.#envConfig.get("JWT_TOKEN_ISSUER"),
        subject: userData.id.toString(),
      }
    );

    return token;
  }
}
