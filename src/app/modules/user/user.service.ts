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

const updateUserService = async (id: string, data: Partial<User>): Promise<User> => {
    const result = await prisma.user.update({
        where: {
            id,
        },
        data,
    });
    return result;
};

const deleteUserService = async (id: string): Promise<User> => {
    const result = await prisma.user.delete({
        where: {
            id,
        },
    });

    return result;
};

export default { getAllUsers, getSpecificUserService, updateUserService, deleteUserService };
