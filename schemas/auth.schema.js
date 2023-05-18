import { z } from "zod";

export const bodySignIn = z.object({
  mail: z.string().email(),
  credential: z.string(),
});

export const bodySignUp = z.object({
  mail: z.string().email(),
  credential: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});
