"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookPositionDto = void 0;
var BookPositionDto = (function () {
    function BookPositionDto() {
    }
    BookPositionDto.getAttributeTypeMap = function () {
        return BookPositionDto.attributeTypeMap;
    };
    BookPositionDto.discriminator = undefined;
    BookPositionDto.attributeTypeMap = [
        {
            "name": "books",
            "baseName": "books",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return BookPositionDto;
}());
exports.BookPositionDto = BookPositionDto;
//# sourceMappingURL=BookPositionDto.js.map