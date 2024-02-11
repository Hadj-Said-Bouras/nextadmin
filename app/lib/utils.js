import mongoose from "mongoose";

export const connectToDB = async () => {
    const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB)
    connection.isConnected = db.connections[0].readyState;
    console.log("connected")
  } catch(error) {
    throw new Error("error in connecting" + error)
  }
};

// connectToDB().catch(console.dir);
