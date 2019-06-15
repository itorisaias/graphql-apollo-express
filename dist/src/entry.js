"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./config/server"));
server_1.default.listen(8000, function () {
    console.log("[SERVER] Running at http://localhost:8000/graphql");
});
