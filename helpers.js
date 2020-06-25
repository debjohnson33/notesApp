import { MongoClient } from 'mongodb';

export const setDatabaseData = async (collectionName, data) => {
  const client = await MongoClient.connect(`mongodb://localhost:27017/TEST_DB`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = client.db('TEST_DB');

  await db.collection(collectionName).insertMany(data);

  client.close();
};