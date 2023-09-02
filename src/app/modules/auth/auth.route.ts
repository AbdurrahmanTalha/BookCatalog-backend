import express from "express";
import controller from "./auth.controller";

const router = express.Router();

router.post("/signup", controller.register);
router.post("/signin", controller.login);

export default router;
