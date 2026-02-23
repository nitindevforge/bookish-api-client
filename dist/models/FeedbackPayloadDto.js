"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackPayloadDto = void 0;
var FeedbackPayloadDto = (function () {
    function FeedbackPayloadDto() {
    }
    FeedbackPayloadDto.getAttributeTypeMap = function () {
        return FeedbackPayloadDto.attributeTypeMap;
    };
    FeedbackPayloadDto.discriminator = undefined;
    FeedbackPayloadDto.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        }
    ];
    return FeedbackPayloadDto;
}());
exports.FeedbackPayloadDto = FeedbackPayloadDto;
//# sourceMappingURL=FeedbackPayloadDto.js.map