"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookPayloadDto = void 0;
var BookPayloadDto = (function () {
    function BookPayloadDto() {
    }
    BookPayloadDto.getAttributeTypeMap = function () {
        return BookPayloadDto.attributeTypeMap;
    };
    BookPayloadDto.discriminator = undefined;
    BookPayloadDto.mapping = undefined;
    BookPayloadDto.attributeTypeMap = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "cover",
            "baseName": "cover",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "genre",
            "baseName": "genre",
            "type": "string",
            "format": ""
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "number",
            "format": ""
        }
    ];
    return BookPayloadDto;
}());
exports.BookPayloadDto = BookPayloadDto;
//# sourceMappingURL=BookPayloadDto.js.map