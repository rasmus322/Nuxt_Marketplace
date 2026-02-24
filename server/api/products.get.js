import { getDB } from "../utils/db";

export default defineEventHandler(() => {
    const db = getDB()
    console.log(db.data)
    return db.data.products
})