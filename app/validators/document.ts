import { getFieldValidator } from '#lib/field_types'
import Field from '#models/field'
import vine, { VineAny } from '@vinejs/vine'

export const createDocumentDto = (fields: Field[]) => {
  const schema: Record<string, VineAny> = {}

  fields.forEach((field) => {
    let validator = getFieldValidator(field.type)

    if (!field.required) {
      validator = validator.optional()
    }

    schema[field.name] = validator
  })

  return vine.object({
    ...schema,
    formId: vine.number(),
  })
}

export const createDocumentValidator = (fields: Field[]) => vine.compile(createDocumentDto(fields))

export const createDocumentProcessingDto = vine.object({
  documentId: vine.number(),
  destinationDepartmentId: vine.number(),
})

export const createDocumentProcessingValidator = vine.compile(createDocumentProcessingDto)
