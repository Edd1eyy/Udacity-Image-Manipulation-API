"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizing_1 = __importDefault(require("./apis/resizing"));
var instructions_1 = __importDefault(require("./apis/instructions"));
var routes = express_1.default.Router();
// place all your endpoints in this router object
routes.get("/", function (_req, res) {
    res.send("this is the main api route, add /instructions for tips ");
});
routes.use("/instructions", instructions_1.default);
routes.use("/resizing", resizing_1.default);
exports.default = routes;
