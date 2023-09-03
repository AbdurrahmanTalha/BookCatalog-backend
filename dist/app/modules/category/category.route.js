"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = __importDefault(require("./category.controller"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get("/", category_controller_1.default.getCategories);
router.get("/:id", category_controller_1.default.getSpecificCategory);
router.patch("/:id", (0, auth_1.default)("ADMIN", "admin"), category_controller_1.default.updateCategory);
router.delete("/:id", (0, auth_1.default)("ADMIN", "admin"), category_controller_1.default.deleteCategory);
router.post("/create-category", (0, auth_1.default)("ADMIN", "admin"), category_controller_1.default.createCategory);
exports.default = router;
