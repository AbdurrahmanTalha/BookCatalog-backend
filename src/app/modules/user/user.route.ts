import express from "express";
import controller from "./user.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", auth("ADMIN", "admin"), controller.getAllUsers);
router.get("/:id", auth("ADMIN", "admin"), controller.getSpecificUser);
router.patch("/:id", auth("ADMIN", "admin"), controller.updateUser);
router.delete("/:id", auth("ADMIN", "admin"), controller.deleteUser);

export default router;
