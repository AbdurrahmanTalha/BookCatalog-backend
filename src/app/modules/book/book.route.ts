import express from "express";
import controller from "./book.controller";

const router = express.Router();

router.get("/", controller.getAllBook);
router.post("/create-book", controller.createBook);

export default router;
