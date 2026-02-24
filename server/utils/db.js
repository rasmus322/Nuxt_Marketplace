import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dbPath = join(__dirname, "../../db.json")

const defaultData = {
    products: [],
    categories: [],
    orders: []
}

const adapter = new JSONFileSync(dbPath)
const db = new LowSync(adapter, defaultData)

db.read()

export const getDB = () => db