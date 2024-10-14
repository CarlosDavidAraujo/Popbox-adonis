import vine from '@vinejs/vine'

export const createDocumentDto = vine.object({
  name: vine.string().trim(),
})

export const createDocumentValidator = vine.compile(createDocumentDto)

export const createDocumentProcessingDto = vine.object({
  documentId: vine.number(),
  destinationDepartmentId: vine.number(),
})

export const createDocumentProcessingValidator = vine.compile(createDocumentProcessingDto)
