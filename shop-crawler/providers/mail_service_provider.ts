import type { ApplicationService } from '@adonisjs/core/types'
import MailService from '#services/mail_service'


export interface MailServiceInterface{
  respond: (mail: string, message: string) => void
}

declare module '@adonisjs/core/types' {
  interface ContainerBindings {
    mail: MailServiceInterface
  }
}

export default class MailServiceProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    this.app.container.singleton(MailService, () => new MailService())

    this.app.container.alias('mail', MailService)
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