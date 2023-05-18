import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import EnvConfig from "../config/env.config";
import User from "../models/user.model";

export default class AuthMiddleware {
  #envConfig;

  constructor() {
    this.#envConfig = EnvConfig;
  }

  /**
   * Passport JWT strategy implementation to extract JWT token data and verify
   */
  registerJwtStrategy() {
    const authStrategy = new JwtStrategy(
      {
        secretOrKey: this.#envConfig.get("JWT_TOKEN_SECRET"),
        algorithms: ["HS256"],
        issuer: this.#envConfig.get("JWT_TOKEN_ISSUER"),
        ignoreExpiration: false,
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer"),
      },
      async (jwtPayload, done) => {
        const _id = jwtPayload.sub.toString();
        if (!_id) return done(null, false);

        try {
          let user = await User.findByPk(_id);

          user ? done(null, user) : done(null, false);
        } catch (err) {
          done(err);
        }
      }
    );

    passport.use(authStrategy);
    return passport.initialize();
  }
}
