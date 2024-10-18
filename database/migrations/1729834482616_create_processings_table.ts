import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'processings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('document_id').references('documents.id').notNullable()
      table.integer('source_department_id').references('departments.id').notNullable()
      table.integer('destination_department_id').references('departments.id').notNullable()
      table.integer('sender_id').references('users.id').notNullable()
      table.integer('receiver_id').references('users.id').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
