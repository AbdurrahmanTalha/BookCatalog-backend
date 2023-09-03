"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = __importDefault(require("./book.controller"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get("/", book_controller_1.default.getAllBook);
router.get("/:id", book_controller_1.default.getBook);
router.patch("/:id", (0, auth_1.default)("ADMIN", "admin"), book_controller_1.default.updateBook);
router.delete("/:id", (0, auth_1.default)("ADMIN", "admin"), book_controller_1.default.deleteBook);
router.post("/create-book", (0, auth_1.default)("ADMIN", "admin"), book_controller_1.default.createBook);
exports.default = router;
