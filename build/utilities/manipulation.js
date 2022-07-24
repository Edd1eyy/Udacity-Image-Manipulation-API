"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var resizeImage = function (name, width, height) {
    var originalImagePath = "./public/images/".concat(name, ".jpg");
    var cachImagePath = "./public/imageCach/".concat(name, "-").concat(width, "x").concat(height, ".jpg");
    return (0, sharp_1.default)(originalImagePath).resize(width, height).toFile(cachImagePath);
};
exports.default = resizeImage;
