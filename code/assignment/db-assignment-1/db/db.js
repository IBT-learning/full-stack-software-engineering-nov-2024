import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)

const dbConnect = async () => {
    try {
        await client.connect()
        console.log("Connected to MongoDB database successfully");
    } catch (error) {
        console.log("Error connecting to database: ", error);
    }
};

export default dbConnect;