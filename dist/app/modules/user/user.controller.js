"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("./user.service"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.default.getAllUsers();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        data: result,
        message: "Successfully found all users",
    });
});
const getSpecificUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.default.getSpecificUserService(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        data: result,
        message: "Successfully found user",
    });
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.default.updateUserService(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        data: result,
        message: "Successfully updated user",
    });
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.default.deleteUserService(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        data: result,
        message: "Successfully deleted user",
    });
});
exports.default = { getAllUsers, getSpecificUser, updateUser, deleteUser };
