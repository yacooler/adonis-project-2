import ShopAddedClassBased from '#events/shop_added_class_based';
import Shop from '#models/shop'
import shopValidator from '#validators/shop_validator';
import type { HttpContext } from '@adonisjs/core/http'
import emitter from '@adonisjs/core/services/emitter';



export default class ShopsController {


  async index({}: HttpContext) {
    const all = await Shop.query().preload('shopClass').preload('products')   
    return all;    
  }

  async store({ request }: HttpContext) {
    const shopData = await request.validateUsing(shopValidator);
    const shop = await Shop.create(shopData);
    
    //вызываем эмит классическим образом
    await emitter.emit('shop:stored', shop);

    //вызываем эмит через основанное на классе событие
    ShopAddedClassBased.dispatch(shop);

    return shop;

  }

}
