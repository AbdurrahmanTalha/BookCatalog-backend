import express from "express";
import controller from "./book.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", controller.getAllBook);
router.get("/:id", controller.getBook);
router.patch("/:id", auth("ADMIN", "admin"), controller.updateBook);
router.delete("/:id", auth("ADMIN", "admin"), controller.deleteBook);
router.post("/create-book", auth("ADMIN", "admin"), controller.createBook);

export default router;
