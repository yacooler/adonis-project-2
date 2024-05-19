import Shop from '#models/shop'
import { BaseEvent } from '@adonisjs/core/events'


//Основанное на классе событие, чтобы не добавлять его вручную в types/events.ts
export default class ShopAddedClassBased extends BaseEvent {
  /**
   * Accept event data as constructor parameters
   */
  constructor(shop: Shop) {
    super()
  }
}