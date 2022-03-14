/* ES: Requerimos frameworks/librerias */
/* EN: Require framewroks/libreries */

/* Update from 20/02/2022 changing import method "require" to "import" ES6 method */
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { create } from "express-handlebars";
import "dotenv/config";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from "morgan";

// Consts of nodejs modules
const app = express();
const server = http.createServer(app);
const httpServer = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

// Import files
import "./models/mongodb.js"
import routes from "./routes/index.routes.js";

// morgan http methods
app.use(morgan("dev"));

// Routes
app.use(routes)

// Loading static files
app.use(express.static(path.join(__dirname, "../public")));

// Template engine handlebars config
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

// Convert data to json
app.use(express.urlencoded( {extended: false} ));

httpServer.on("connection", (socket) => {
    console.log("Nuevo usuario conectado")
    socket.on("disconnect", _ => {
        console.log("Usuario desconectado");
    });
    socket.on("chat message", (msg) => {
        httpServer.emit("chat message", msg);
    });
});

export default app;