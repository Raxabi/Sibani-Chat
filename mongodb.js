const mongoose = require("mongoose");

const SIBANI_CHAT_HOST = process.env.SIBANI_CHAT_HOST;
const SIBANI_CHAT_DATABASE = process.env.SIBANI_CHAT_DATABASE;
const MONGO_URI = `mongodb://${SIBANI_CHAT_HOST}/${SIBANI_CHAT_DATABASE}`;

mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log("Conectado"))
    .catch(err => console.log(err));