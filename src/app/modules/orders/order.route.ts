import express from "express";
import controller from "./order.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", auth("admin"), controller.getAllOrder);
router.post("/create-order", auth("customer"), controller.createOrder);

export default router;
