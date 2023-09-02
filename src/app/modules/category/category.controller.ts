import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import service from "./category.service";
import sendResponse from "../../../shared/sendResponse";
import { Category } from "@prisma/client";
import httpStatus from "http-status";

const createCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await service.createCategoryService(req.body);

    sendResponse<Category>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Successfully created category",
        data: result,
    });
});

const getCategories = catchAsync(async (req: Request, res: Response) => {
    const result = await service.getAllCategoryService();

    sendResponse<Category[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Successfully found categories",
        data: result,
    });
});

const getSpecificCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await service.getSpecificCategoryService(req.params.id);

    sendResponse<Category>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: " Successfully found category",
        data: result,
    });
});

const updateCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await service.updateCategoryService(req.params.id, req.body);

    sendResponse<Category>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Successfully updated category",
        data: result,
    });
});

export default { createCategory, getCategories, getSpecificCategory, updateCategory };
