import express from "express";
import controller from "./category.controller";

const router = express.Router();

router.post("/create-category", controller.createCategory);

export default router;