"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptBase = exports.ScriptCord = void 0;
const ScriptBase_1 = require("./base/ScriptBase");
Object.defineProperty(exports, "ScriptBase", { enumerable: true, get: function () { return ScriptBase_1.ScriptBase; } });
const ScriptCord_1 = __importDefault(require("./ScriptCord"));
exports.ScriptCord = ScriptCord_1.default;
