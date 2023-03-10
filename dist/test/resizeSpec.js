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
Object.defineProperty(exports, "__esModule", { value: true });
const resize_1 = require("../utilities/resize");
it('resizes image file ', () => __awaiter(void 0, void 0, void 0, function* () {
    const thumbnailFile = yield (0, resize_1.resizeImage)('fjord', 100, 100);
    const outputFile = `src/images/thumb/fjord-100-100.jpg`;
    expect(thumbnailFile).toEqual(outputFile);
}));
