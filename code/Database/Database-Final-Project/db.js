import mongoose from "mongoose";

const dbConnect = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('[DB]: Successfully connected to the database');
    
  }catch (err){
    console.error(`[DB error]: Cannot connect to database, `, err);
    throw err;
  }
};

export {dbConnect, mongoose};
