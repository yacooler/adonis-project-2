import { DateTime } from 'luxon'
import { BaseModel, column, computed, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Shop from './shop.js'
import ShopProduct from './shop_product.js'

export default class Product extends BaseModel {

  static table = 'products'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name:string


  @manyToMany(()=>Shop, {
    pivotTable: ShopProduct.table,
    pivotColumns: ['price', 'price_date']
  })
  declare shops: ManyToMany<typeof Shop>

  @computed()
  get shopPrice(){
    return this.$extras.pivot_price
  }

  @computed()
  get shopPriceDate(){
    return this.$extras.pivot_price_date
  }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}