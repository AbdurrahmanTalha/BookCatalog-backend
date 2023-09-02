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

const getSpecificUser = async (req: Request, res: Response) => {
    const result = await service.getSpecificUserService(req.params.id);

    sendResponse<User>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Successfully found user",
    });
};

const updateUser = async (req: Request, res: Response) => {
    const result = await service.updateUserService(req.params.id, req.body);

    sendResponse<User>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Successfully updated user",
    });
};

const deleteUser = async (req: Request, res: Response) => {
    const result = await service.deleteUserService(req.params.id);

    sendResponse<User>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Successfully deleted user",
    });
};

export default { getAllUsers, getSpecificUser, updateUser, deleteUser };
