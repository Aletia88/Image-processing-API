"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = require("../utilities/resize");
const fs_1 = __importDefault(require("fs"));
const route = express_1.default.Router();
route.get('/images', (req, res) => {
    const url = `/src/images/thumb/${req.query.filename}-${req.query.width}-${req.query.height}.jpg`;
    if (Object.keys(req.query).length > 3) {
        res.send('please enter only filename, width and height query string');
    }
    else if (req.query.filename == undefined || req.query.width == undefined || req.query.height == undefined) {
        res.send('enter int');
    }
    else if (isNaN(req.query.width)) {
        res.send('enter only number');
    }
    else if (Object.keys(req.query).length != 3) {
        res.send('please enter a filename');
    }
    else if (fs_1.default.existsSync(url)) {
        res.sendFile(process.cwd() + url);
    }
    else {
        (0, resize_1.resizeImage)(req.query.filename, Number(req.query.width), Number(req.query.height));
        res.sendFile(process.cwd() + url);
    }
});
exports.default = route;
