import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUsers = async (): Promise<User[]> => {
    const users = await prisma.user.findMany({});

    return users;
};

const getSpecificUserService = async (id: string): Promise<User | null> => {
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
    });
    return user;
};

export default { getAllUsers, getSpecificUserService };
