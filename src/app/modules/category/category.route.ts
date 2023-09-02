import express from "express";
import controller from "./category.controller";

const router = express.Router();

router.get("/", controller.getCategories);
router.get("/:id", controller.getSpecificCategory);
router.post("/create-category", controller.createCategory);

export default router;
