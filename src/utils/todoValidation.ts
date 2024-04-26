import { z } from 'zod'

export const TodoContraint = z.object({
  title: z.string().min(1, { message: 'este campo es obligatorio' }),
  description: z.string().min(10, { message: 'este campo debe tener al menos 10 caracteres' })
})
