import z from "zod";

/**
 * Handles form validation
 */
export const FormSchema = z.object({
  first_name: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
});

export type TUserProfileForm = z.infer<typeof FormSchema>;
