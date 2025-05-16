import mongoose from "mongoose";

const dbConnect = async () => {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/ibt-recipes');
    console.log('[DB]: Successfully connected to the database');
    
  }catch (err){
    console.error(`[DB error]: Cannot connect to database, `, err);
    throw err;
  }
};

export {dbConnect, mongoose};