import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, computed, manyToMany } from '@adonisjs/lucid/orm'
import ShopClass from './shop_class.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Product from './product.js'
import ShopProduct from './shop_product.js'

export default class Shop extends BaseModel {

  static table = 'shops'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare shopClassId: number

  @column()
  declare customName: string | null

  @belongsTo(()=> ShopClass)
  declare shopClass: BelongsTo<typeof ShopClass>

  @column()
  declare position: any

  @computed()
  declare positionAsText: string

  @manyToMany(()=>Product, {
    pivotTable: ShopProduct.table,
    pivotColumns: ['price', 'price_date']
  })
  declare products: ManyToMany<typeof Product>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}