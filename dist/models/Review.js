"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
var Review = (function () {
    function Review() {
    }
    Review.getAttributeTypeMap = function () {
        return Review.attributeTypeMap;
    };
    Review.discriminator = undefined;
    Review.mapping = undefined;
    Review.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalRatingCount",
            "baseName": "totalRatingCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalRate",
            "baseName": "totalRate",
            "type": "number",
            "format": ""
        },
        {
            "name": "averageRate",
            "baseName": "averageRate",
            "type": "number",
            "format": ""
        },
        {
            "name": "rating",
            "baseName": "rating",
            "type": "Array<Rating>",
            "format": ""
        }
    ];
    return Review;
}());
exports.Review = Review;
//# sourceMappingURL=Review.js.map