import passport from "passport";

export default class RouteProtectorMiddleware {
  authenticate() {
    return passport.authenticate("jwt", { session: false });
  }
}
