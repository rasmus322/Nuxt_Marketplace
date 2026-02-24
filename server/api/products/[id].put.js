import { getDB } from "~~/server/utils/db";

export default defineEventHandler(async (event) => {
    const db = getDB()
    const id = event.context.params.id
    const body = await readBody(event)

    const index = db.data.products.findIndex(item => item.id === id)
    if (index === -1) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Товар не найден'
        })
    }

    db.data.products[index] = { ...db.data.products[index], ...body }
    db.write()

    return db.data.products[index]
})