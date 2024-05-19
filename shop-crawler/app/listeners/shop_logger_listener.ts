import Shop from "#models/shop";
import logger from "@adonisjs/core/services/logger";


export default class ShopLoggerListener {
  handle(shop: Shop){
    logger.info(`logging: shop ${JSON.stringify(shop, null, 2)} has been opened!`)
  }
}