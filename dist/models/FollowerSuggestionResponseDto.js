"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowerSuggestionResponseDto = void 0;
var FollowerSuggestionResponseDto = (function () {
    function FollowerSuggestionResponseDto() {
    }
    FollowerSuggestionResponseDto.getAttributeTypeMap = function () {
        return FollowerSuggestionResponseDto.attributeTypeMap;
    };
    FollowerSuggestionResponseDto.discriminator = undefined;
    FollowerSuggestionResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Suggestion",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return FollowerSuggestionResponseDto;
}());
exports.FollowerSuggestionResponseDto = FollowerSuggestionResponseDto;
//# sourceMappingURL=FollowerSuggestionResponseDto.js.map