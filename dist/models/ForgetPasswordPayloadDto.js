"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgetPasswordPayloadDto = void 0;
var ForgetPasswordPayloadDto = (function () {
    function ForgetPasswordPayloadDto() {
    }
    ForgetPasswordPayloadDto.getAttributeTypeMap = function () {
        return ForgetPasswordPayloadDto.attributeTypeMap;
    };
    ForgetPasswordPayloadDto.discriminator = undefined;
    ForgetPasswordPayloadDto.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        }
    ];
    return ForgetPasswordPayloadDto;
}());
exports.ForgetPasswordPayloadDto = ForgetPasswordPayloadDto;
//# sourceMappingURL=ForgetPasswordPayloadDto.js.map