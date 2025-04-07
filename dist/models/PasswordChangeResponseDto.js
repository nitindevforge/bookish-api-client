"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordChangeResponseDto = void 0;
var PasswordChangeResponseDto = (function () {
    function PasswordChangeResponseDto() {
    }
    PasswordChangeResponseDto.getAttributeTypeMap = function () {
        return PasswordChangeResponseDto.attributeTypeMap;
    };
    PasswordChangeResponseDto.discriminator = undefined;
    PasswordChangeResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "PasswordChangeResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return PasswordChangeResponseDto;
}());
exports.PasswordChangeResponseDto = PasswordChangeResponseDto;
//# sourceMappingURL=PasswordChangeResponseDto.js.map