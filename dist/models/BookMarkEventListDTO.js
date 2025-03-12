"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMarkEventListDTO = void 0;
var BookMarkEventListDTO = (function () {
    function BookMarkEventListDTO() {
    }
    BookMarkEventListDTO.getAttributeTypeMap = function () {
        return BookMarkEventListDTO.attributeTypeMap;
    };
    BookMarkEventListDTO.discriminator = undefined;
    BookMarkEventListDTO.mapping = undefined;
    BookMarkEventListDTO.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "Events",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "UserDetails",
            "format": ""
        }
    ];
    return BookMarkEventListDTO;
}());
exports.BookMarkEventListDTO = BookMarkEventListDTO;
//# sourceMappingURL=BookMarkEventListDTO.js.map