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
    SignupPayloadDto.mapping = undefined;
    SignupPayloadDto.attributeTypeMap = [
        {
            "name": "userName",
            "baseName": "userName",
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
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string",
            "format": ""
        }
    ];
    return SignupPayloadDto;
}());
exports.SignupPayloadDto = SignupPayloadDto;
//# sourceMappingURL=SignupPayloadDto.js.map