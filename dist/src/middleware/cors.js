"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var config = {
    origin: '*',
    allowedHeaders: '*',
    methods: '*',
};
exports.default = cors_1.default(config);
