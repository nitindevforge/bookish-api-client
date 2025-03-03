"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
var Location = (function () {
    function Location() {
    }
    Location.getAttributeTypeMap = function () {
        return Location.attributeTypeMap;
    };
    Location.discriminator = undefined;
    Location.mapping = undefined;
    Location.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "coordinates",
            "baseName": "coordinates",
            "type": "Array<number>",
            "format": ""
        }
    ];
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=Location.js.map