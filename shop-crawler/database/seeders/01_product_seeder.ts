import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
      {name:'Ананасы'},
      {name:'Бананы'},
      {name:'Груши'},
      {name:'Киви'},
      {name:'Папайя'},
      {name:'Яблоки'},
    ])
  }
}