import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Shop from './shop.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class ShopClass extends BaseModel {

  static table = 'shop_classes'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare actualName: string

  @hasMany(()=>Shop)
  declare shops: HasMany<typeof Shop>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}