"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpEntityPayloadDto = void 0;
var OtpEntityPayloadDto = (function () {
    function OtpEntityPayloadDto() {
    }
    OtpEntityPayloadDto.getAttributeTypeMap = function () {
        return OtpEntityPayloadDto.attributeTypeMap;
    };
    OtpEntityPayloadDto.discriminator = undefined;
    OtpEntityPayloadDto.attributeTypeMap = [
        {
            "name": "otp",
            "baseName": "otp",
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
    return OtpEntityPayloadDto;
}());
exports.OtpEntityPayloadDto = OtpEntityPayloadDto;
//# sourceMappingURL=OtpEntityPayloadDto.js.map