import Shop from '#models/shop'
import { bestPrice } from '#services/best_price';
import type { HttpContext } from '@adonisjs/core/http'
import { Database } from '@adonisjs/lucid/database';
import db from '@adonisjs/lucid/services/db';

export default class ShopsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const all = await Shop.query().preload('shopClass').preload('products')
    
    return all;
    
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await bestPrice(db, params.id, {longitude:50, latitude: 50}, 2000);
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}

