/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ShopsController = () => import('#controllers/shops_controller')

router.resource('/shop', ShopsController).as('shop')
