"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Routes imports
const productsRouter_1 = __importDefault(require("./routes/productsRouter"));
const app = (0, express_1.default)();
// Parses JSON requests with payloads, and populates req.body
app.use(express_1.default.json());
// Endpoints
app.use('/api/v1/products', productsRouter_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map