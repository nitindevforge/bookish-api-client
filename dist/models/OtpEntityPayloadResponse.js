"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpEntityPayloadResponse = void 0;
var OtpEntityPayloadResponse = (function () {
    function OtpEntityPayloadResponse() {
    }
    OtpEntityPayloadResponse.getAttributeTypeMap = function () {
        return OtpEntityPayloadResponse.attributeTypeMap;
    };
    OtpEntityPayloadResponse.discriminator = undefined;
    OtpEntityPayloadResponse.attributeTypeMap = [
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
    return OtpEntityPayloadResponse;
}());
exports.OtpEntityPayloadResponse = OtpEntityPayloadResponse;
//# sourceMappingURL=OtpEntityPayloadResponse.js.map