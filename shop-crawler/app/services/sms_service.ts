import { appendFileSync } from "node:fs";
import { SmsServiceInterface } from "../../providers/sms_service_provider.js";

export default class SmsService implements SmsServiceInterface{
  uid: number;
  secret: string;

  constructor(uid: number, secret: string){
    this.uid = uid;
    this.secret = secret;
    appendFileSync('sms_log', `make service \n`)
  }

  respond(phone: string, message: string){
    this.uid
    this.secret
    appendFileSync('sms_log', `send to ${phone}: ${message}\n`)
  }
}