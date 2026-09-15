import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoMemoryServer = null;

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/verdora_db';
  
  try {
    // Attempt connecting to local/provided MongoDB URI with short timeout
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2000,
    });
    console.log(`🌿 MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.warn(`⚠️ Local MongoDB connection failed (${err.message}). Starting MongoMemoryServer...`);
    try {
      mongoMemoryServer = await MongoMemoryServer.create();
      const memUri = mongoMemoryServer.getUri();
      const conn = await mongoose.connect(memUri);
      console.log(`🌱 In-Memory MongoDB Connected at: ${memUri}`);
    } catch (memErr) {
      console.error(`❌ MongoDB Memory Server failed: ${memErr.message}`);
      process.exit(1);
    }
  }
};

export const closeDB = async () => {
  await mongoose.disconnect();
  if (mongoMemoryServer) {
    await mongoMemoryServer.stop();
  }
};
