"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createOrderService = (user, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(user);
    const result = yield prisma.order.create({
        data: {
            userId: user.userId,
            status: "pending",
            orderedBooks: data.map(book => ({
                quantity: book.quantity,
                book: book.bookId,
            })),
        },
    });
    return result;
});
const getAllOrderService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.order.findMany();
    return result;
});
exports.default = { createOrderService, getAllOrderService };
