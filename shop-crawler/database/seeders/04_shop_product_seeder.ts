import ShopProduct from '#models/shop_product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  // {name:'Ананасы'}
  // {name:'Бананы'}
  // {name:'Груши'}
  // {name:'Киви'}
  // {name:'Папайя'}
  // {name:'Яблоки'}
  async run() {
    ShopProduct.createMany([
      {shopId: 1, productId: 1, price: 1.62, priceDate: DateTime.fromISO('2024-04-03')},
      {shopId: 1, productId: 2, price: 0.33, priceDate: DateTime.fromISO('2024-04-03')},
      {shopId: 1, productId: 3, price: 0.80, priceDate: DateTime.fromISO('2024-04-03')},
      {shopId: 1, productId: 3, price: 0.76, priceDate: DateTime.fromISO('2024-05-01')},
      {shopId: 1, productId: 4, price: 1.13, priceDate: DateTime.fromISO('2024-04-01')},
      {shopId: 1, productId: 5, price: 5.00, priceDate: DateTime.fromISO('2024-04-01')},
      {shopId: 1, productId: 6, price: 0.22, priceDate: DateTime.fromISO('2024-04-01')},
      {shopId: 1, productId: 6, price: 0.18, priceDate: DateTime.fromISO('2024-05-01')},

      {shopId: 2, productId: 1, price: 1.42, priceDate: DateTime.fromISO('2024-04-03')},
      {shopId: 2, productId: 2, price: 0.33, priceDate: DateTime.fromISO('2024-04-03')},
      {shopId: 2, productId: 2, price: 0.32, priceDate: DateTime.fromISO('2024-05-03')},
      {shopId: 2, productId: 3, price: 1.76, priceDate: DateTime.fromISO('2024-05-01')},
      {shopId: 2, productId: 4, price: 1.11, priceDate: DateTime.fromISO('2024-04-01')},
      {shopId: 2, productId: 5, price: 3.50, priceDate: DateTime.fromISO('2024-04-01')},
      {shopId: 2, productId: 6, price: 0.22, priceDate: DateTime.fromISO('2024-04-01')},

      {shopId: 3, productId: 1, price: 1.77, priceDate: DateTime.fromISO('2024-04-03')},
      {shopId: 3, productId: 2, price: 0.54, priceDate: DateTime.fromISO('2024-05-03')},
      {shopId: 3, productId: 3, price: 0.73, priceDate: DateTime.fromISO('2024-05-01')},
      {shopId: 3, productId: 4, price: 0.99, priceDate: DateTime.fromISO('2024-04-01')},
      {shopId: 3, productId: 5, price: 4.00, priceDate: DateTime.fromISO('2024-04-01')},
      {shopId: 3, productId: 6, price: 0.30, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 3, productId: 6, price: 0.25, priceDate: DateTime.fromISO('2024-03-01')},
      {shopId: 3, productId: 6, price: 0.20, priceDate: DateTime.fromISO('2024-05-01')},



      {shopId: 4, productId: 1, price: 1.20, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 4, productId: 2, price: 0.30, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 4, productId: 3, price: 0.80, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 4, productId: 4, price: 1.10, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 4, productId: 5, price: 4.00, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 4, productId: 6, price: 0.20, priceDate: DateTime.fromISO('2024-01-01')},

      {shopId: 5, productId: 1, price: 1.20, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 5, productId: 2, price: 0.30, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 5, productId: 3, price: 0.80, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 5, productId: 4, price: 1.10, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 5, productId: 5, price: 4.00, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 5, productId: 6, price: 0.20, priceDate: DateTime.fromISO('2024-01-01')},

      {shopId: 6, productId: 1, price: 1.20, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 6, productId: 2, price: 0.30, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 6, productId: 3, price: 0.80, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 6, productId: 4, price: 1.10, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 6, productId: 5, price: 4.00, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 6, productId: 6, price: 0.20, priceDate: DateTime.fromISO('2024-01-01')},

      {shopId: 7, productId: 1, price: 1.20, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 7, productId: 2, price: 0.30, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 7, productId: 3, price: 0.80, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 7, productId: 4, price: 1.10, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 7, productId: 5, price: 4.00, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 7, productId: 6, price: 0.20, priceDate: DateTime.fromISO('2024-01-01')},

      {shopId: 8, productId: 1, price: 1.08, priceDate: DateTime.fromISO('2024-06-01')},
      {shopId: 8, productId: 2, price: 0.27, priceDate: DateTime.fromISO('2024-06-01')},
      {shopId: 8, productId: 3, price: 0.72, priceDate: DateTime.fromISO('2024-06-01')},
      {shopId: 8, productId: 4, price: 0.99, priceDate: DateTime.fromISO('2024-06-01')},
      {shopId: 8, productId: 5, price: 3.60, priceDate: DateTime.fromISO('2024-06-01')},
      {shopId: 8, productId: 6, price: 0.18, priceDate: DateTime.fromISO('2024-06-01')},



      
      {shopId: 9, productId: 6, price: 0.15, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 10, productId: 6, price: 0.15, priceDate: DateTime.fromISO('2024-01-01')},
      {shopId: 11, productId: 6, price: 0.15, priceDate: DateTime.fromISO('2024-01-01')},


    ])
  }
}