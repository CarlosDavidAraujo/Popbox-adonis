import { fieldTypes } from '#lib/field_types'
import vine from '@vinejs/vine'

export const formFieldDto = vine.object({
  label: vine.string().trim(),
  name: vine.string().trim().toCamelCase(),
  description: vine.string().trim().optional(),
  required: vine.boolean(),
  type: vine.enum(fieldTypes),
})

export const createFormDto = vine.object({
  title: vine.string().trim(),
  description: vine.string().trim(),
  // fields é enviado do client como uma string, entao precisamos fazer o parse antes de validar
  fields: vine.array(formFieldDto).parse((value) => JSON.parse(value as string)),
})

export const createFormValidator = vine.compile(createFormDto)
