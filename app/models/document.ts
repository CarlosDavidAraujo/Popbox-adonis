import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Department from './department.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Processing from './processing.js'
import Form from './form.js'

export default class Document extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare departmentId: number

  @column()
  declare formId: number

  @column()
  declare metadata: object

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Form)
  declare form: BelongsTo<typeof Form>

  @belongsTo(() => Department)
  declare department: BelongsTo<typeof Department>

  @hasMany(() => Processing)
  declare processings: HasMany<typeof Processing>
}
