"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPayloadDto = void 0;
var LoginPayloadDto = (function () {
    function LoginPayloadDto() {
    }
    LoginPayloadDto.getAttributeTypeMap = function () {
        return LoginPayloadDto.attributeTypeMap;
    };
    LoginPayloadDto.discriminator = undefined;
    LoginPayloadDto.attributeTypeMap = [
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
    return LoginPayloadDto;
}());
exports.LoginPayloadDto = LoginPayloadDto;
//# sourceMappingURL=LoginPayloadDto.js.map