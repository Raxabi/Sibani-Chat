// import modules
import express from "express";
import router from "./routes/index.routes";
import path from "path";
import "dotenv/config";
import { create } from "express-handlebars";

const app = express(); // init express

import "./connetion" // mongo connection
import morgan from "morgan";

console.log(path.join(__dirname, "public"))

// getting files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false })); // convert data to json parsed on url
app.use(router); //use site routes, it must be the under the urlencoded use

app.use(morgan("dev"))

// template engine config
app.set("views", path.join(__dirname, "views"));        // give the directory where all the files are allowed
app.engine(         // create our own config
  ".hbs",       // template engine name, "hbs" is valid too but it must be changed on the last line app.set("view engine", ".hbs") by the same change
  create({
    layoutsDir: path.join(app.get("views"), "layout"),      // give the directory where is allowed the global file
    partialsDir: path.join(app.get("views"), "partials"),       // give the directory where is allowed the partials files like a navbar navigation, footer, etc...
    defaultLayout: "indexlayout",       // default name of layout file
    extname: ".hbs",        // default file extension of all files
  }).engine
);
app.set("view engine", ".hbs");

export default app;