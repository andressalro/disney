import { bodySignIn, bodySignUp } from "../../schemas/auth.schema";
import UserAuthService from "../../services/auth/users_auth.service";

export default class AuthController {
  constructor() {
    this.userAuthService = new UserAuthService();
  }

  async signUp(req, res, next) {
    const body = bodySignUp.parse(req.body);
    const userToken = await this.userAuthService.signUp(body);
    return res.json({
      token: userToken,
    });
  }

  async signIn(req, res, next) {
    const { mail, credential } = bodySignIn.parse(req.body);
    const accessToken = await this.userAuthService.signIn(mail, credential);

    res.status(accessToken ? 200 : 401).json({
      ...(accessToken
        ? { token: accessToken }
        : { message: "Authentication failed" }),
    });
  }
}
