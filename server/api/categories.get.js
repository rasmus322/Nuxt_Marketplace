import { getDB } from "../utils/db";

export default defineEventHandler(() => {
    const db = getDB()
    return db.data.categories
})