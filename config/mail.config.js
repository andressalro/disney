import nodemailer from "nodemailer";
import EnvConfig from "./env.config";

export const transporter = nodemailer.createTransport({
  host: EnvConfig.EMAIL_HOST,
  port: EnvConfig.EMAIL_PORT,
  auth: {
    user: EnvConfig.EMAIL_USER,
    pass: EnvConfig.EMAIL_PASS,
  },
});
