import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'shop_products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.integer('shop_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('shops')
  
      table.integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')

      table.float('price').notNullable()

      table.timestamp('price_date').notNullable().defaultTo(this.now())
      
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())

      table.unique(['shop_id', 'product_id', 'price_date'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}