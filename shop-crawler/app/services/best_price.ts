import Shop from "#models/shop"
import ShopProduct from "#models/shop_product"
import { Database } from "@adonisjs/lucid/database"

/* Поиск лучшей цены */
const bestPrice = (db: Database, productId: number, point: {longitude: number, latitude: number}, maxDistance: number = Number.MAX_SAFE_INTEGER) => {

  const geo = `position.STDistance(geography::STGeomFromText('POINT(${point.longitude} ${point.latitude})', 4326))`

  return db.query()
    .from(Shop.table)
    .join(ShopProduct.table, `${Shop.table}.${Shop.primaryKey}` , 'shop_id')
    .where('product_id', '=', productId)
    .andWhereRaw(`${geo} <= ${maxDistance}`)
    .select(db.raw(`${geo} as distance`))
    .orderByRaw('1 desc')
}

export { bestPrice }