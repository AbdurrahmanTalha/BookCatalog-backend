import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUsers = async (): Promise<User[]> => {
    const users = await prisma.user.findMany({});

    return users;
};

export default { getAllUsers };
