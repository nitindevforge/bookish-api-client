"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupPayloadDto = void 0;
var SignupPayloadDto = (function () {
    function SignupPayloadDto() {
    }
    SignupPayloadDto.getAttributeTypeMap = function () {
        return SignupPayloadDto.attributeTypeMap;
    };
    SignupPayloadDto.discriminator = undefined;
    SignupPayloadDto.attributeTypeMap = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        }
    ];
    return SignupPayloadDto;
}());
exports.SignupPayloadDto = SignupPayloadDto;
//# sourceMappingURL=SignupPayloadDto.js.map