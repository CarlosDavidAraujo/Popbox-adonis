import { fieldTypes } from '#lib/field_types'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'fields'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('form_id').references('forms.id').notNullable()
      table.string('label').notNullable()
      table.string('name').notNullable()
      table.string('description').nullable()
      table.boolean('required').notNullable()
      table
        .enu('type', fieldTypes, {
          useNative: true,
          enumName: 'field_type',
          existingType: true,
        })
        .notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
