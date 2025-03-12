"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMarkEventDTO = void 0;
var BookMarkEventDTO = (function () {
    function BookMarkEventDTO() {
    }
    BookMarkEventDTO.getAttributeTypeMap = function () {
        return BookMarkEventDTO.attributeTypeMap;
    };
    BookMarkEventDTO.discriminator = undefined;
    BookMarkEventDTO.mapping = undefined;
    BookMarkEventDTO.attributeTypeMap = [
        {
            "name": "eventId",
            "baseName": "eventId",
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
    return BookMarkEventDTO;
}());
exports.BookMarkEventDTO = BookMarkEventDTO;
//# sourceMappingURL=BookMarkEventDTO.js.map