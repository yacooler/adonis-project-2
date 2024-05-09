import Product from "#models/product";
import Shop from "#models/shop";
import ShopClass from "#models/shop_class";
import ShopProduct from "#models/shop_product";
import { Database } from "@adonisjs/lucid/database";
import { DateTime } from "luxon";

export default class FindProductService {
  async respond(db: Database, productId: number, point: { longitude: number, latitude: number }, radiusInMeters: number, actualDate: DateTime) {
    const geo = `position.STDistance(geography::STGeomFromText('POINT(${point.longitude} ${point.latitude})', 4326))`

    return await db.query()
    .from(Shop.table)
      .join(ShopClass.table, `${ShopClass.table}.${ShopClass.primaryKey}`, 'shop_class_id')
      .join(ShopProduct.table, `${Shop.table}.${Shop.primaryKey}` , 'shop_id')
      .join(Product.table, `${Product.table}.${Product.primaryKey}`, 'product_id')
      .where('product_id', '=', productId)
      .andWhereRaw(`${geo} <= ${radiusInMeters}`)
      .andWhereRaw(`
        ${ShopProduct.table}.price_date = (
          SELECT MAX(price_date)
          FROM ${ShopProduct.table} t
          WHERE 
            t.shop_id = ${ShopProduct.table}.shop_id
            AND t.product_id = ${ShopProduct.table}.product_id
            AND t.price_date <= '${actualDate.toISO()!}')`)
      .select(
        [
        db.raw('isnull(custom_name, actual_name) as shopName'),
        db.raw(`${geo} as distance`),
        `${Product.table}.name as productName`,
        `${ShopProduct.table}.price as productPrice`,
        `${ShopProduct.table}.price_date as productPriceDate`,
        db.raw(`${Shop.table}.position_as_text`)
        ]
      )
      .orderByRaw('distance desc')

  }
}
