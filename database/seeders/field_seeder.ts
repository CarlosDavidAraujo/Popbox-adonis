import Field from '#models/field'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class FieldSeeder extends BaseSeeder {
  async run() {
    await Field.createMany([
      {
        formId: 1,
        label: 'Assunto',
        name: 'assunto',
        required: true,
        type: 'text',
      },
      {
        formId: 1,
        label: 'Data',
        name: 'data',
        required: true,
        type: 'date',
        description: 'A data em que o documento foi redigido',
      },
      {
        formId: 1,
        label: 'Remetente',
        name: 'remetente',
        required: true,
        type: 'text',
      },
      {
        formId: 1,
        label: 'Destinatário',
        name: 'destinatario',
        required: true,
        type: 'text',
      },
    ])
  }
}
