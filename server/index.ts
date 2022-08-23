// This file starts the backend server

import { Server } from "socket.io";
import "dotenv/config";

const io = new Server({
    cors: {
        origin: "http://localhost:3000"
    }
})

io.on("connection", (socket) => {
    console.log(socket.id);
})

io.listen(5000)