"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodReadsBookPayloadDto = void 0;
var GoodReadsBookPayloadDto = (function () {
    function GoodReadsBookPayloadDto() {
    }
    GoodReadsBookPayloadDto.getAttributeTypeMap = function () {
        return GoodReadsBookPayloadDto.attributeTypeMap;
    };
    GoodReadsBookPayloadDto.discriminator = undefined;
    GoodReadsBookPayloadDto.mapping = undefined;
    GoodReadsBookPayloadDto.attributeTypeMap = [
        {
            "name": "books",
            "baseName": "books",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "add",
            "baseName": "add",
            "type": "boolean",
            "format": ""
        }
    ];
    return GoodReadsBookPayloadDto;
}());
exports.GoodReadsBookPayloadDto = GoodReadsBookPayloadDto;
//# sourceMappingURL=GoodReadsBookPayloadDto.js.map