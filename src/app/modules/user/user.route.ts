import express from "express";
import controller from "./user.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", auth("ADMIN", "admin"), controller.getAllUsers);
router.get("/:id", auth("ADMIN", "admin"), controller.getSpecificUser);

export default router;
