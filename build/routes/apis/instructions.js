"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var instruct = app.get("/", function (_req, res) {
    return res.send("use images from folder and use: http://localhost:3000/api/resizing?name=IMG-NAME&width=POSITIVE-VALUE&height=POSITIVE-VALUE.jpg for manipulation");
});
exports.default = instruct;
