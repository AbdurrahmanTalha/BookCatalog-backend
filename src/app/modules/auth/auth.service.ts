import { PrismaClient, User } from "@prisma/client";
import { ILoginUser, ILoginUserResponse } from "./auth.interface";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import config from "../../../config";
import { createToken } from "../../../helpers/jwtHelpers";
import { Secret } from "jsonwebtoken";

const prisma = new PrismaClient();

const registerService = async (data: User): Promise<User> => {
    const result = await prisma.user.create({
        data,
        include: {
            books: true,
            order: true,
        },
    });
    return result;
};

const loginService = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
    const { email, password } = payload;

    const isUserExist = await prisma.user.findFirst({
        where: {
            email,
        },
    });

    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
    }

    if (isUserExist.password !== password) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Password is incorrect");
    }

    const { role } = isUserExist;
    const accessToken = createToken({ id: isUserExist.id, role }, config.jwt.secret as Secret, config.jwt.expires_in as string);

    const refreshToken = createToken({ id: isUserExist.id, role }, config.jwt.refresh_secret as Secret, config.jwt.refresh_expires_in as string);

    return {
        accessToken,
        refreshToken,
    };
};

export default { registerService, loginService };
