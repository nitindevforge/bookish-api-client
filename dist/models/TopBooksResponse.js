"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBooksResponse = void 0;
var TopBooksResponse = (function () {
    function TopBooksResponse() {
    }
    TopBooksResponse.getAttributeTypeMap = function () {
        return TopBooksResponse.attributeTypeMap;
    };
    TopBooksResponse.discriminator = undefined;
    TopBooksResponse.attributeTypeMap = [
        {
            "name": "bookId",
            "baseName": "bookId",
            "type": "Book",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "any",
            "format": ""
        }
    ];
    return TopBooksResponse;
}());
exports.TopBooksResponse = TopBooksResponse;
//# sourceMappingURL=TopBooksResponse.js.map