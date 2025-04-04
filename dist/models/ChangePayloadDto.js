"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePayloadDto = void 0;
var ChangePayloadDto = (function () {
    function ChangePayloadDto() {
    }
    ChangePayloadDto.getAttributeTypeMap = function () {
        return ChangePayloadDto.attributeTypeMap;
    };
    ChangePayloadDto.discriminator = undefined;
    ChangePayloadDto.mapping = undefined;
    ChangePayloadDto.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "confirmPassword",
            "baseName": "confirmPassword",
            "type": "string",
            "format": ""
        },
        {
            "name": "newPassword",
            "baseName": "newPassword",
            "type": "string",
            "format": ""
        }
    ];
    return ChangePayloadDto;
}());
exports.ChangePayloadDto = ChangePayloadDto;
//# sourceMappingURL=ChangePayloadDto.js.map