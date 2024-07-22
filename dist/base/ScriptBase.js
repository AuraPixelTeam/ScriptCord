"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptBase = void 0;
class ScriptBase {
    _name_;
    _author_;
    _version_;
    client;
    constructor(client) {
        this.client = client;
        this.init();
    }
    init() { }
}
exports.ScriptBase = ScriptBase;
