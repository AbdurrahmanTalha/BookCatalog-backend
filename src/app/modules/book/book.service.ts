import { Book, Prisma, PrismaClient } from "@prisma/client";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IBookFilterRequest } from "./book.interface";
import calculatePagination from "../../../helpers/paginationHelpers";
import { bookRelationalFields, bookRelationalFieldsMapper, bookSearchableFields } from "./book.constant";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

const prisma = new PrismaClient();

const createBookService = async (data: Book): Promise<Book> => {
    const result = await prisma.book.create({
        data,
        include: {
            category: true,
        },
    });

    return result;
};
const getAllBookService = async (filters: IBookFilterRequest, options: IPaginationOptions) => {
    const { limit, page, skip } = calculatePagination(options);
    const { search, minPrice, maxPrice, ...filterData } = filters;

    const andConditions = [];

    if (search) {
        andConditions.push({
            OR: bookSearchableFields.map(field => ({
                [field]: {
                    contains: search,
                    mode: "insensitive",
                },
            })),
        });
    }

    if (minPrice !== undefined) {
        andConditions.push({
            price: {
                gte: parseFloat(minPrice), // Convert minPrice to a number
            },
        });
    }

    if (maxPrice !== undefined) {
        andConditions.push({
            price: {
                lte: parseFloat(maxPrice), // Convert maxPrice to a number
            },
        });
    }

    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => {
                if (bookRelationalFields.includes(key)) {
                    return {
                        [bookRelationalFieldsMapper[key]]: {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            id: (filterData as any)[key],
                        },
                    };
                } else {
                    return {
                        [key]: {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            equals: (filterData as any)[key],
                        },
                    };
                }
            }),
        });
    }

    const whereConditions: Prisma.BookWhereInput = andConditions.length > 0 ? { AND: andConditions } : {};

    const result = await prisma.book.findMany({
        include: {
            category: true,
        },
        where: whereConditions,
        skip,
        take: limit,
        orderBy:
            options.sortBy && options.sortOrder
                ? { [options.sortBy]: options.sortOrder }
                : {
                      createdAt: "desc",
                  },
    });
    const total = await prisma.book.count({
        where: whereConditions,
    });

    return {
        meta: {
            total,
            page,
            limit,
        },
        data: result,
    };
};

const getSpecificBookService = async (id: string): Promise<Book | null> => {
    const result = await prisma.book.findUnique({
        where: {
            id,
        },
    });

    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, "Book not found");
    }

    return result;
};

const updateBookService = async (id: string, data: Partial<Book>): Promise<Book> => {
    const result = await prisma.book.update({
        where: {
            id,
        },
        data,
    });

    return result;
};

const deleteBookService = async (id: string): Promise<Book> => {
    const result = await prisma.book.delete({
        where: {
            id,
        },
    });

    return result;
};

export default { createBookService, getAllBookService, getSpecificBookService, updateBookService, deleteBookService };
