import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.render("main.hbs");
});

router.get("/register", (req, res) => {
    res.render("register.hbs");
});

router.post("/register/newUser", (req, res) => {
    res.render("register.hbs");
});


router.get("/login", (req,res) => {
    res.render("login.hbs");
});

router.post("/login/loggedUser", (req,res) => {
    null;
});

router.get("/chat", (req, res) => {
    res.render("chat.hbs");
});

export default router;