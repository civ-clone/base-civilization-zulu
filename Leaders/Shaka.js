"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shaka = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const Zulu_1 = require("../Zulu");
class Shaka extends Leader_1.default {
    static civilization() {
        return Zulu_1.default;
    }
    name() {
        return 'Shaka';
    }
}
exports.Shaka = Shaka;
exports.default = Shaka;
//# sourceMappingURL=Shaka.js.map