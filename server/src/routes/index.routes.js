import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

export { router }
