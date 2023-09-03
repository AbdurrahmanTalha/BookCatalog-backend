"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("../modules/auth/auth.route"));
const user_route_1 = __importDefault(require("../modules/user/user.route"));
const category_route_1 = __importDefault(require("../modules/category/category.route"));
const book_route_1 = __importDefault(require("../modules/book/book.route"));
const order_route_1 = __importDefault(require("../modules/orders/order.route"));
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        router: auth_route_1.default,
    },
    {
        path: "/users",
        router: user_route_1.default,
    },
    {
        path: "/category",
        router: category_route_1.default,
    },
    {
        path: "/books",
        router: book_route_1.default,
    },
    {
        path: "/orders",
        router: order_route_1.default,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.router));
exports.default = router;
