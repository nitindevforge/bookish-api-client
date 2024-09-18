"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Place = void 0;
var Place = (function () {
    function Place() {
    }
    Place.getAttributeTypeMap = function () {
        return Place.attributeTypeMap;
    };
    Place.discriminator = undefined;
    Place.attributeTypeMap = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    return Place;
}());
exports.Place = Place;
//# sourceMappingURL=Place.js.map