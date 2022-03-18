import mongoose from "mongoose";

const mongo_host = process.env.MONGO_HOST;
const mongo_database = process.env.DATABASE;
const MONGO_URI = `mongodb://${mongo_host}/${mongo_database}`;

try {
    async function mongoconnect() {
        await mongoose.connect(MONGO_URI);
        console.log("Conectado a la base de datos");
    };
    mongoconnect();
} catch (error) {
    console.log(error);
};