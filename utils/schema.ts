import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(0),
  lastName: z.string().min(2),
  username: z.string().min(2),
});
