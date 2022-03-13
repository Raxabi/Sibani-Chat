import mongoose from "mongoose";
const SIBANI_CHAT_HOST = process.env.SIBANI_CHAT_HOST;
const SIBANI_CHAT_DATABASE = process.env.SIBANI_CHAT_DATABASE;
const MONGO_URI = `mongodb://${SIBANI_CHAT_HOST}/${SIBANI_CHAT_DATABASE}`;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Conectado a la base de datos"))
    .catch(err => console.log(err));