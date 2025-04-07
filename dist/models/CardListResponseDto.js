"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardListResponseDto = void 0;
var CardListResponseDto = (function () {
    function CardListResponseDto() {
    }
    CardListResponseDto.getAttributeTypeMap = function () {
        return CardListResponseDto.attributeTypeMap;
    };
    CardListResponseDto.discriminator = undefined;
    CardListResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<CardList>",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return CardListResponseDto;
}());
exports.CardListResponseDto = CardListResponseDto;
//# sourceMappingURL=CardListResponseDto.js.map