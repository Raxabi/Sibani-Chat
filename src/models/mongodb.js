import mongoose from "mongoose";
const SIBANI_CHAT_HOST = process.env.SIBANI_CHAT_HOST;
const SIBANI_CHAT_DATABASE = process.env.SIBANI_CHAT_DATABASE;
const MONGO_URI = `mongodb://${SIBANI_CHAT_HOST}/${SIBANI_CHAT_DATABASE}`;

try {
    async function connection() {
        await mongoose.connect(MONGO_URI);
        console.log("Conectado a la base de datos");
    }
    connection();
} catch (error) {
    console.log(error);
}