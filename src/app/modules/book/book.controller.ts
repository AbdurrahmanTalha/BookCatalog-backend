import { Book } from "@prisma/client";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import service from "./book.service";
import httpStatus from "http-status";
import { Request, Response } from "express";
import pick from "../../../shared/pick";
import { bookFilterableFields } from "./book.constant";

const createBook = catchAsync(async (req: Request, res: Response) => {
    const book = await service.createBookService(req.body);

    sendResponse<Book>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: book,
        message: "Successfully created book",
    });
});

const getAllBook = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, bookFilterableFields);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await service.getAllBookService(filters, options);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Books fetched successfully",
        meta: result.meta,
        data: result.data,
    });
});

const getBook = catchAsync(async (req: Request, res: Response) => {
    const result = await service.getSpecificBookService(req.params.id);

    sendResponse<Book>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book Fetched successfully",
        data: result,
    });
});

export default { createBook, getAllBook, getBook };
