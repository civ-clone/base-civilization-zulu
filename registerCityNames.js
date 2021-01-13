"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Zulu_1 = require("./Zulu");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
[
    'uMgungundlovu',
    'Nobamba',
    'Bulawayo',
    'KwaDukuza',
    'Nongoma',
    'oNdini',
    'Nodwengu',
    'Ndondakusuka',
    'Babanango',
    'Khangela',
    'Kwahlomendlini',
    'Hlobane',
    'eThekwini',
    'Mlambongwenya',
    'Eziqwaqweni',
    'Isiphezi',
    'Masotsheni',
    'Mtunzini',
    'Nyakamubi',
    'Hlatikulu',
    'Mthonjaneni',
    'Empangeni',
    'Pongola',
    'Tungela',
    'Kwamashu',
    'Ingwavuma',
    'Hluhluwe',
    'Mtubatuba',
    'Mhlahlandlela',
    'Mthatha',
    'Maseru',
    'Lobamba',
    'Qunu',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Zulu_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map