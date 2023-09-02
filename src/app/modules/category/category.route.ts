import express from "express";
import controller from "./category.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", controller.getCategories);
router.get("/:id", controller.getSpecificCategory);
router.patch("/:id", auth("ADMIN", "admin"), controller.updateCategory);
router.post("/create-category", auth("ADMIN", "admin"), controller.createCategory);

export default router;
