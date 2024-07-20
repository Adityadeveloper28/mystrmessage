import { z } from "zod";
export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 character")
  .max(20, "Username must be no more 20character")
  .regex(/^[a-zA-Z0-9_]+$/, "username must contain special characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({message:'Inalid email address'}),
  password:z.string().min(6,{message:"password must be atleast 6 characters"})
});
