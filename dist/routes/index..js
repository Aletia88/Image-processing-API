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
    const imageUrl = `/src/images/images/${req.query.filename}.jpg`;
    if (Object.keys(req.query).length > 3) {
        res.send('please enter only filename, width and height of the image');
    }
    else if (!fs_1.default.existsSync(imageUrl)) {
        res.send('Please enter the correct file name');
    }
    else if (req.query.filename == undefined || req.query.width == undefined || req.query.height == undefined) {
        res.send('Sorry There is a missing parameter ');
    }
    else if (isNaN(req.query.width) || req.query.width < 1) {
        res.send('width can only be a postive number');
    }
    else if (isNaN(req.query.height) || req.query.height < 1) {
        res.send('height can only be a postive number');
    }
    else if (fs_1.default.existsSync(url)) {
        res.sendFile(process.cwd() + url);
    }
    else if (!fs_1.default.existsSync(url) && req.query.filename) {
        (0, resize_1.resizeImage)(req.query.filename, Number(req.query.width), Number(req.query.height));
        res.sendFile(process.cwd() + url);
    }
    else {
        res.sendFile("can't find the image");
    }
});
exports.default = route;
