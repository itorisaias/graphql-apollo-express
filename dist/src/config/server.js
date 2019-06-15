"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var apollo_server_express_1 = require("apollo-server-express");
var graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
var app_1 = __importDefault(require("./app"));
var graphql_1 = __importDefault(require("./../graphql"));
var server = new apollo_server_express_1.ApolloServer({
    schema: graphql_1.default,
    validationRules: [
        graphql_depth_limit_1.default(7),
    ],
});
server.applyMiddleware({ app: app_1.default, path: '/graphql' });
var httpServer = http_1.createServer(app_1.default);
exports.default = httpServer;
