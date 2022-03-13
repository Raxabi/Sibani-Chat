import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World");
});

router.get("/login", (req,res) => {
    res.render("login.hbs");
});

// ES: Añadimos soporte para los nombres de usuario
// EN: Add support for nicknames
let name = null;
let users = [];

export default router;