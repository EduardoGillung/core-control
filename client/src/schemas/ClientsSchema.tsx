import { z } from "zod";

export const clientSchema = z.object({
  name: z.string().min(3, "Nome precisa ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  document: z.string().min(11, "Documento deve ter no mínimo 11 caracteres"),
  address: z.string().optional(),
  is_active: z.boolean(),
});

export type ClientFormData = z.infer<typeof clientSchema>;
