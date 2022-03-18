import { Router } from "express";
import usershm from "../models/usershm";

const router = Router(); // init router

router.get("/", (req, res) => {
    res.render("index.hbs");
});

router.get("/login", (req, res) => {
    res.render("login.hbs")
});

router.get("/login", (req, res) => {
    res.render(login.hbs)
});

router.get("/register", (req, res) => {
    res.render("register.hbs")
});

router.post("/register/useradd", async (req, res) => {
    res.render("thanks.hbs");
    const user = usershm(req.body);
    await user.save();
    res.redirect("/");
});

export default router;