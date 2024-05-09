import ShopClass from '#models/shop_class'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await ShopClass.createMany([
      {actualName:'Тройка'},
      {actualName:'Семерка'},
      {actualName:'Девятка'},
    ]);
    
  }
}