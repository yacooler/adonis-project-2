import Shop from "#models/shop";

declare module '@adonisjs/core/types' {
  interface EventsList {
    'shop:stored': Shop
  }
}