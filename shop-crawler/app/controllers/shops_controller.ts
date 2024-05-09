import Shop from '#models/shop'
import type { HttpContext } from '@adonisjs/core/http'

export default class ShopsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const all = await Shop.query().preload('shopClass').preload('products')   
    return all;    
  }
}
