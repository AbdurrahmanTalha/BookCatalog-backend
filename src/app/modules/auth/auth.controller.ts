import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import service from "./auth.service";
import sendResponse from "../../../shared/sendResponse";
import { User } from "@prisma/client";
import httpStatus from "http-status";
import config from "../../../config";
import { ILoginUserResponse } from "./auth.interface";

const register = catchAsync(async (req: Request, res: Response) => {
    const result = await service.registerService(req.body);

    sendResponse<User>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Successfully register",
        data: result,
    });
});

const login = catchAsync(async (req: Request, res: Response) => {
    const result = await service.loginService(req.body);
    const { refreshToken, ...others } = result;

    const cookieOptions = {
        secure: config.env === "production",
        httpOnly: true,
    };

    res.cookie("refreshToken", refreshToken, cookieOptions);

    sendResponse<ILoginUserResponse>(res, {
        statusCode: 200,
        success: true,
        message: "User logged in successfully !",
        data: others,
    });
});

export default { register, login };
