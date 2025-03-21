"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookByStatusDto = void 0;
var BookByStatusDto = (function () {
    function BookByStatusDto() {
    }
    BookByStatusDto.getAttributeTypeMap = function () {
        return BookByStatusDto.attributeTypeMap;
    };
    BookByStatusDto.discriminator = undefined;
    BookByStatusDto.mapping = undefined;
    BookByStatusDto.attributeTypeMap = [
        {
            "name": "search",
            "baseName": "search",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        }
    ];
    return BookByStatusDto;
}());
exports.BookByStatusDto = BookByStatusDto;
//# sourceMappingURL=BookByStatusDto.js.map