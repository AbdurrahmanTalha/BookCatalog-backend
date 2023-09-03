import { PrismaClient } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";

const prisma = new PrismaClient();

const createOrderService = async (
    user: JwtPayload,
    data: {
        bookId: string;
        quantity: number;
    }[],
) => {
    console.log(user);
    const result = await prisma.order.create({
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
};

export default { createOrderService };
