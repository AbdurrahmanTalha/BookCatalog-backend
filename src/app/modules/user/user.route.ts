import express from "express";
import controller from "./user.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", auth("ADMIN", "admin"), controller.getAllUsers);

export default router;
