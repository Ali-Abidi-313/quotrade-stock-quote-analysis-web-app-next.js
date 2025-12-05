import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const MONGODB_URL = process.env.MONGODB_URL;

if(!MONGODB_URL){
  throw new Error("please define the MONGODB_URL in your .env.local file");
}

let isConnected = false;

export const connectionDB = async() => {
  if(isConnected){
    return;
  }

  try{
    // mongoose.connect returns a connection-like object; use mongoose.connection.readyState
    // to get current connection state safely
    await mongoose.connect(MONGODB_URL);
    isConnected = mongoose.connection.readyState;
    console.log("MongoDB connected");  

  }catch(error){
    console.log("MongoDB Connection Error!! ", error);
  }

};

