import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
        console.log(`MongoDb connected! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error : Fail to connect MongoDb ", error.message)
        throw error
    }
}

export { connectMongoDb }