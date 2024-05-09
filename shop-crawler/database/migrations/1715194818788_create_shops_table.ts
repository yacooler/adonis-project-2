import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'shops'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().primary()

      table.integer('shop_class_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('shop_classes')
        .onDelete('cascade')

      table.string('custom_name').nullable(),

      table.geography('position').notNullable(),

      table.specificType('position_as_text', 'AS position.STAsText()')

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}