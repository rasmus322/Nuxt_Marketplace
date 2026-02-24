import { getDB } from "../utils/db";
import { nanoid } from "nanoid";

export default defineEventHandler(async (event) => {
    const db = getDB()
    const body = await readBody(event)

    const newOrder = {
        id: nanoid(),
        createdAt: new Date().toISOString(),
        ...body
    }

    db.data.orders.push(newOrder)
    db.write()

    return newOrder
})