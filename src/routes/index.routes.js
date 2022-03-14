import { Router } from "express";
import user from "../models/users.js";
const router = Router();

// root route
router.get("/", (req, res) => {
    res.render("main.hbs");
});

// register page route
router.get("/register", (req, res) => {
    res.render("register.hbs");
});

// new register route
router.post("/register/newuser", async (req, res) => {
    const userDataRequested = user(req.body);
    console.log(userDataRequested);
    await userDataRequested.save();
});

// login page route
router.get("/login", (req,res) => {
    res.render("login.hbs");
});

// login route
router.post("/login/loggedUser", (req,res) => {
    req.body();
});

// chat route
router.get("/chat", (req, res) => {
    res.render("chat.hbs");
});

export default router;