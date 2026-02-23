"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackCreateResponseDto = void 0;
var FeedbackCreateResponseDto = (function () {
    function FeedbackCreateResponseDto() {
    }
    FeedbackCreateResponseDto.getAttributeTypeMap = function () {
        return FeedbackCreateResponseDto.attributeTypeMap;
    };
    FeedbackCreateResponseDto.discriminator = undefined;
    FeedbackCreateResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return FeedbackCreateResponseDto;
}());
exports.FeedbackCreateResponseDto = FeedbackCreateResponseDto;
//# sourceMappingURL=FeedbackCreateResponseDto.js.map