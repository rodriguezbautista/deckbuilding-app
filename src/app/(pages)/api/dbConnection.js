import { MongoClient, ServerApiVersion } from 'mongodb'
require('dotenv').config()

const uri = process.env.DB_URI

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

const dbName = 'pokemon-deckbuilder'

export async function query (collectionName, callback) {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection(collectionName)
    await callback(collection)
  } catch (err) {
    // buscar el codigo http correspondiente
    throw err
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
