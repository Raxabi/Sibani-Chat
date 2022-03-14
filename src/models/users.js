import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    "nickname": {
        type: String,
        required: true,
        unique: true,
    },
    "mail": {
        type: String,
        required: true,
        unique: true,
    },
    "password": {
        type: String,
        required: true,
        trim: true,
    }
},
    {
    timestamps: true,
    }
);

export default mongoose.model("user", userSchema);