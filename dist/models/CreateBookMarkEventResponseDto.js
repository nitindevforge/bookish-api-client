"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookMarkEventResponseDto = void 0;
var CreateBookMarkEventResponseDto = (function () {
    function CreateBookMarkEventResponseDto() {
    }
    CreateBookMarkEventResponseDto.getAttributeTypeMap = function () {
        return CreateBookMarkEventResponseDto.attributeTypeMap;
    };
    CreateBookMarkEventResponseDto.discriminator = undefined;
    CreateBookMarkEventResponseDto.mapping = undefined;
    CreateBookMarkEventResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "BookMarkEventDTO",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return CreateBookMarkEventResponseDto;
}());
exports.CreateBookMarkEventResponseDto = CreateBookMarkEventResponseDto;
//# sourceMappingURL=CreateBookMarkEventResponseDto.js.map