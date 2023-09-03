"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./user.controller"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get("/", (0, auth_1.default)("ADMIN", "admin"), user_controller_1.default.getAllUsers);
router.get("/:id", (0, auth_1.default)("ADMIN", "admin"), user_controller_1.default.getSpecificUser);
router.patch("/:id", (0, auth_1.default)("ADMIN", "admin"), user_controller_1.default.updateUser);
router.delete("/:id", (0, auth_1.default)("ADMIN", "admin"), user_controller_1.default.deleteUser);
exports.default = router;
