import Form from '#models/form'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class FormSeeder extends BaseSeeder {
  async run() {
    await Form.createMany([
      {
        title: 'Ofício',
        description: 'Preencha os campos abaixo para criar um novo documento padrão ofício',
      },
      {
        title: 'Ata',
        description: 'Preencha os campos abaixo para criar um novo documento padrão ata',
      },
    ])
  }
}
