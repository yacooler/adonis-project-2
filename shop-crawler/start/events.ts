import ShopAddedClassBased from '#events/shop_added_class_based';
import ShopLoggerListener from '#listeners/shop_logger_listener';
import app from '@adonisjs/core/services/app'
import emitter from '@adonisjs/core/services/emitter'

emitter.on('shop:stored', async function(shop) {
  const smsService = await app.container.make('sms');
  smsService.respond('8-800-', `New shop ${shop.customName} has been opened!`)
})

//Эвент через класс-листнер с ленивой загрузкой (app/listeners)
const SendEmail = () => import('#listeners/send_email_listener')
emitter.on('shop:stored', [SendEmail, 'handle'])

//Эвент через класс-бэйзд эвенты (app/events)
emitter.on(ShopAddedClassBased, [ShopLoggerListener])