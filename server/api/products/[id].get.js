import { getDB } from "~~/server/utils/db";

export default defineEventHandler((event) => {
    const db = getDB()
    const id = event.context.params.id

    const product = db.data.products.find(item => item.id === id)
    if (!product) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Товар не найден'
        })
    }

    return product
})