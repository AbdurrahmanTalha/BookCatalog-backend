import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import service from "./order.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";

const createOrder = catchAsync(async (req: Request, res: Response) => {
    if(!req.user) {
        throw new ApiError(httpStatus.FORBIDDEN, "Authentication failed")
    }
    const result = await service.createOrderService(req.user, req.body.orderedBooks);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Successfully created order",
        data: result,
    });
});

export default { createOrder };
