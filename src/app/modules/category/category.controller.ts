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

export default { createCategory };
