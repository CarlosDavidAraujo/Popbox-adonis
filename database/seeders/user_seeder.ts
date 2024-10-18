import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class UserSeeder extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        email: 'cdavidav19@gmail.com',
        fullName: 'Carlos David Araújo Ventura',
        password: 'senha123',
        departmentId: 1,
      },
      {
        email: 'joao@gmail.com',
        fullName: 'João Paulo Cavalcante Mourão',
        password: 'senha123',
        departmentId: 2,
      },
      {
        email: 'ruan@gmail.com',
        fullName: 'Ruan Andrius Freitas',
        password: 'senha123',
        departmentId: 3,
      },
    ])
  }
}
