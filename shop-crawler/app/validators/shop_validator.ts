import vine from '@vinejs/vine'

const shopValidator = vine.compile(
    vine.object({
      id: vine.number().optional(),
      shopClassId: vine.number(),
      customName: vine.string().nullable(),
      position: vine.any()
    })
  )


export default shopValidator;