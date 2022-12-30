"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const index_1 = __importDefault(require("./routes/index."));
const port = 3000;
app.use('/api', index_1.default);
app.listen(port, () => {
    console.log('the server is started');
});
exports.default = app;
