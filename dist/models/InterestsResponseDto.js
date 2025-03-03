"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestsResponseDto = void 0;
var InterestsResponseDto = (function () {
    function InterestsResponseDto() {
    }
    InterestsResponseDto.getAttributeTypeMap = function () {
        return InterestsResponseDto.attributeTypeMap;
    };
    InterestsResponseDto.discriminator = undefined;
    InterestsResponseDto.mapping = undefined;
    InterestsResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<InterestsPayloadDto>",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return InterestsResponseDto;
}());
exports.InterestsResponseDto = InterestsResponseDto;
//# sourceMappingURL=InterestsResponseDto.js.map