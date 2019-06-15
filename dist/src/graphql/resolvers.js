"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolverMap = {
    Query: {
        me: function (_, args) {
            console.log({ args: args });
            return {
                username: 'Robin Wieruch',
            };
        },
    },
};
exports.default = resolverMap;
