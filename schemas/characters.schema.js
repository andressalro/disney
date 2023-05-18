import { z } from "zod";

export const queryCharacters = z.object({
  name: z.string().optional(),
  age: z
    .string()
    .transform((value) => parseInt(value, 10))
    .optional(),
  movie: z
    .string()
    .transform((value) => parseInt(value, 10))
    .optional(),
  weight: z
    .string()
    .transform((value) => parseFloat(value))
    .optional(),
});

export const paramIdCharacter = z.object({
  id: z.string().transform((value) => parseInt(value, 10)),
});

export const bodyCreateCharacter = z.object({
  nombre: z.string().optional(),
  edad: z
    .string()
    .transform((value) => parseInt(value, 10))
    .optional(),
  peso: z
    .string()
    .transform((value) => parseFloat(value))
    .optional(),
  historia: z.string().optional(),
});
