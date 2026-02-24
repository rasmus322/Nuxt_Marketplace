import { getDB } from "../utils/db";
import { nanoid } from "nanoid";

export default defineEventHandler(async (event) => {
    const db = getDB()
    const body = await readBody(event)

    const newProduct = {
        id: nanoid(),
        ...body
    }

    db.data.products.push(newProduct)
    db.write()

    return newProduct
})