import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { fieldTypes } from '#lib/field_types'
import Form from './form.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Field extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare formId: number

  @column()
  declare label: string

  @column()
  declare name: string

  @column()
  declare description: string | null

  @column()
  declare required: boolean

  @column()
  declare type: (typeof fieldTypes)[number]

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Form)
  declare form: BelongsTo<typeof Form>
}
