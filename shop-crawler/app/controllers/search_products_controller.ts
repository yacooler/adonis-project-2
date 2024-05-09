import FindProductService from '#services/find_product_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'

@inject()
export default class SearchProductsController {

  constructor(
    protected findProductService: FindProductService
  ){}


  async show({ params, request }: HttpContext) {
    return this.findProductService.respond(
      db,
      params.id,
      { 
        longitude: request.qs()['longitude'],
        latitude: request.qs()['latitude']
      },
      request.qs()['radius'],
      DateTime.fromISO(request.qs()['actual_date'])
    )
  }

  
}