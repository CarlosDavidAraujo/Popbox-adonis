import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const createDepartmentDto = vine.object({
  name: vine.string().minLength(8).trim(),
})

export const createDepartmentValidator = vine.compile(createDepartmentDto)

export type CreateDepartmentDto = Infer<typeof createDepartmentDto>
