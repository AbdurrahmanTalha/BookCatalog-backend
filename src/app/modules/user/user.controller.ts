import { Request, Response } from "express";
import service from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import { User } from "@prisma/client";
import httpStatus from "http-status";

const getAllUsers = async (req: Request, res: Response) => {
    const result = await service.getAllUsers();

    sendResponse<User[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Successfully found all users",
    });
};

export default { getAllUsers };
