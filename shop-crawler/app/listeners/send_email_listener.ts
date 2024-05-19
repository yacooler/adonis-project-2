import Shop from "#models/shop";
import MailService from "#services/mail_service"
import { inject } from "@adonisjs/core";

//Class-based listeners
export default class SendEmailListener {
  //Тест инжекта зависимости в метод (не в поле класа)
  @inject()
  handle(shop: Shop, mailService: MailService){
    mailService.respond('mail@mail.ru', `new shop ${JSON.stringify(shop, null, 2)} was opened`)
  }
}

