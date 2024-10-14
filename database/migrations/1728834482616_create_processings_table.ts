import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'processings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('document_id').references('documents.id')
      table.integer('source_department_id').references('departments.id')
      table.integer('destination_department_id').references('departments.id')
      table.integer('sender_id').references('users.id')
      table.integer('receiver_id').references('users.id').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
