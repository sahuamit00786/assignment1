"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const { PORT, NODE_ENV } = process.env;
exports.Config = {
    PORT, NODE_ENV
};
