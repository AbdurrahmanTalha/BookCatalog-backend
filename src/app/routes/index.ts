import express from "express";
import authRouter from "../modules/auth/auth.route";
import userRouter from "../modules/user/user.route";
import categoryRouter from "../modules/category/category.route";
import bookRouter from "../modules/book/book.route";
import orderRouter from "../modules/orders/order.route";

const router = express.Router();

const moduleRoutes = [
    {
        path: "/auth",
        router: authRouter,
    },
    {
        path: "/users",
        router: userRouter,
    },
    {
        path: "/category",
        router: categoryRouter,
    },
    {
        path: "/books",
        router: bookRouter,
    },
    {
        path: "/orders",
        router: orderRouter,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.router));
export default router;
