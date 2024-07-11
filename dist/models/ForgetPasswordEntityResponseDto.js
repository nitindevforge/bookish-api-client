"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgetPasswordEntityResponseDto = void 0;
var ForgetPasswordEntityResponseDto = (function () {
    function ForgetPasswordEntityResponseDto() {
    }
    ForgetPasswordEntityResponseDto.getAttributeTypeMap = function () {
        return ForgetPasswordEntityResponseDto.attributeTypeMap;
    };
    ForgetPasswordEntityResponseDto.discriminator = undefined;
    ForgetPasswordEntityResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "ForgetPasswordEntityResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return ForgetPasswordEntityResponseDto;
}());
exports.ForgetPasswordEntityResponseDto = ForgetPasswordEntityResponseDto;
//# sourceMappingURL=ForgetPasswordEntityResponseDto.js.map