import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Document from './document.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Processing extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare sourceDepartmentId: number

  @column()
  declare destinationDepartmentId: number

  @column()
  declare senderId: number

  @column()
  declare receiverId: number | null

  @column()
  declare documentId: number

  @belongsTo(() => Document)
  declare document: BelongsTo<typeof Document>
}
