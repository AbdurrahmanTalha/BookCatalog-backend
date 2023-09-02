import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCategoryService = async (data: Category): Promise<Category> => {
    const result = await prisma.category.create({
        data,
    });

    return result;
};

const getAllCategoryService = async (): Promise<Category[]> => {
    const result = await prisma.category.findMany();

    return result;
};

const getSpecificCategoryService = async (id: string): Promise<Category | null> => {
    const result = await prisma.category.findUnique({
        where: {
            id,
        },
    });

    return result;
};

const updateCategoryService = async (id: string, data: Category): Promise<Category> => {
    const result = await prisma.category.update({
        where: {
            id,
        },
        data,
    });

    return result;
};

export default { createCategoryService, getAllCategoryService, getSpecificCategoryService, updateCategoryService };
