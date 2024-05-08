import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ShopProduct extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare shopId: number

  @column()
  declare productId: number

  @column()
  declare price: number

  @column.dateTime()
  declare priceDate: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}