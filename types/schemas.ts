import * as z from "zod"

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Namnet måste vara minst 2 tecken.",
  }),
  email: z.string().email({
    message: "Ange en giltig e-postadress.",
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Meddelandet måste vara minst 10 tecken.",
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Login Form Schema
export const loginFormSchema = z.object({
  email: z.string().email({
    message: "Ange en giltig e-postadress.",
  }),
  password: z.string().min(6, {
    message: "Lösenordet måste vara minst 6 tecken.",
  }),
})

export type LoginFormData = z.infer<typeof loginFormSchema>
