"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
var Rating = (function () {
    function Rating() {
    }
    Rating.getAttributeTypeMap = function () {
        return Rating.attributeTypeMap;
    };
    Rating.discriminator = undefined;
    Rating.attributeTypeMap = [
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "ratePercentage",
            "baseName": "ratePercentage",
            "type": "number",
            "format": ""
        }
    ];
    return Rating;
}());
exports.Rating = Rating;
//# sourceMappingURL=Rating.js.map