import { Schema, model } from "mongoose";

const users = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20,
        trim: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

export default model("user", users);