import { z } from "zod";

export const FormSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(4, "A senha deve ter pelo menos 4 caracteres").max(12, "A senha deve ter no máximo 12 caracteres"),
  birthData: z
  .string()
  .refine((value) => !isNaN(Date.parse(value)), {
    message: "Data inválida",
  })
  .transform((value) => new Date(value))
})

export type FormSchemaType = z.infer<typeof FormSchema>