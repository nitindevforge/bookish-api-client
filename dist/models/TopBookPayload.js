"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBookPayload = void 0;
var TopBookPayload = (function () {
    function TopBookPayload() {
    }
    TopBookPayload.getAttributeTypeMap = function () {
        return TopBookPayload.attributeTypeMap;
    };
    TopBookPayload.discriminator = undefined;
    TopBookPayload.attributeTypeMap = [
        {
            "name": "bookId",
            "baseName": "bookId",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        }
    ];
    return TopBookPayload;
}());
exports.TopBookPayload = TopBookPayload;
//# sourceMappingURL=TopBookPayload.js.map