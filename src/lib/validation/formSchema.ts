import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(4, "A senha deve ter pelo menos 4 caracteres").max(12, "A senha deve ter no máximo 12 caracteres"),
})

export type FormSchemaType = z.infer<typeof FormSchema>