import type { ApplicationService } from '@adonisjs/core/types'
import SmsService from '../app/services/sms_service.js'
import env from '../start/env.js'

export interface SmsServiceInterface{
  respond: (phone: string, message: string) => void
}

declare module '@adonisjs/core/types' {
  interface ContainerBindings {
    sms: SmsServiceInterface
  }
}

export default class SmsServiceProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    this.app.container.singleton(SmsService, () => new SmsService(
      env.get('SMS_SERVICE_UID'),
      env.get('SMS_SERVICE_SECRET')
    ))

    this.app.container.alias('sms', SmsService)
  }

  /**
   * The container bindings have booted
   */
  async boot() {}

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}