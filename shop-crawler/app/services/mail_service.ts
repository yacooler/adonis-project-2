import { appendFileSync } from "node:fs";
import { MailServiceInterface } from "../../providers/mail_service_provider.js";

export default class MailService implements MailServiceInterface{

  constructor(){
    appendFileSync('mail_log', `make service \n`)
  }

  respond(mail: string, message: string){
    appendFileSync('mail_log', `send to ${mail}: ${message}\n`)
  }
}