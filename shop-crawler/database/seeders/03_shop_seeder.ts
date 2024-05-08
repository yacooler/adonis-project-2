import Shop from '#models/shop'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Shop.createMany([
      { shopClassId: 1, customName: 'Тройка у дома Цюрих', position: 'POINT(8.590847 47.408860 )'},
      { shopClassId: 1, customName: 'Тройка у дома Париж', position: 'POINT(2.265509 48.833946)'},
      { shopClassId: 1, customName: 'Тройка у дома Дубаи', position: 'POINT(55.286282 25.228850)'},

      { shopClassId: 2, position: 'POINT(8.590847 47.408860 )'},
      { shopClassId: 2, position: 'POINT(-122.403697 37.792062 )'},
      { shopClassId: 2, position: 'POINT(2.265509 48.833946)'},
      { shopClassId: 2, position: 'POINT(151.138378 -33.796572)'},
      { shopClassId: 2, position: 'POINT(55.286282 25.228850)'},

      { shopClassId: 3, position: 'POINT(2.265509 48.833946)'},
      { shopClassId: 3, position: 'POINT(151.138378 -33.796572)'},
      { shopClassId: 3, position: 'POINT(55.286282 25.228850)'},
      
    ]);
  }
}