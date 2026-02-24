import { getDB } from "~~/server/utils/db";

export default defineEventHandler((event) => {
    const db = getDB()
    const id = event.context.params.id

    const initialLength = db.data.products.length
    db.data.products = db.data.products.filter(item => item.id !== id)

    if (db.data.products.length === initialLength) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Товар не найден'
        })
    }

    db.write()
    return { success: true }
})