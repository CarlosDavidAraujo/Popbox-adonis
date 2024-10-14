import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Processing extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare documentId: number

  @column()
  declare sourceDepartmentId: number

  @column()
  declare destinationDepartmentId: number

  @column()
  declare senderId: number

  @column()
  declare receiverId: number | null
}
