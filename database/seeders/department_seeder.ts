import Department from '#models/department'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class DepartmentSeeder extends BaseSeeder {
  async run() {
    Department.createMany([
      { name: 'Tecnologia da Informação' },
      { name: 'Recursos Humanos' },
      { name: 'Epidemiologia' },
    ])
  }
}
