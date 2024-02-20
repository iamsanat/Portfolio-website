import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://FSD:FSD@cluster0.jm9hsd3.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  if (!client.isConnected()) {
    await client.connect();
  }
  const db = client.db('your-database-name');
  cachedDb = db;
  return db;
}
