import vine from '@vinejs/vine'

export const fieldTypes = [
  'checkbox',
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'tel',
  'text',
  'time',
  'week',
  'textarea',
] as const

export const getFieldValidator = (type: (typeof fieldTypes)[number]) => {
  switch (type) {
    case 'checkbox':
      return vine.boolean()
    case 'date':
    case 'datetime-local':
    case 'month':
    case 'time':
    case 'week':
      return vine.date()
    case 'email':
      return vine.string().email()
    case 'number':
      return vine.number()
    case 'tel':
      return vine.string().regex(/^[0-9\-\+]{9,15}$/)
    case 'text':
    case 'textarea':
      return vine.string()
    default:
      throw new Error(`Tipo de campo não suportado: ${type}`)
  }
}
