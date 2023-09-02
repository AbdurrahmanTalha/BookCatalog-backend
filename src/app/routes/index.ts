import express from "express";
import authRouter from "../modules/auth/auth.route";
import userRouter from "../modules/user/user.route";
import categoryRouter from "../modules/category/category.route";

const router = express.Router();

const moduleRoutes = [
    {
        path: "/auth",
        route: authRouter,
    },
    {
        path: "/users",
        route: userRouter,
    },
    {
        path: "/category",
        route: categoryRouter
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
