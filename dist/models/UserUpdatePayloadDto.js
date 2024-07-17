"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdatePayloadDto = void 0;
var UserUpdatePayloadDto = (function () {
    function UserUpdatePayloadDto() {
    }
    UserUpdatePayloadDto.getAttributeTypeMap = function () {
        return UserUpdatePayloadDto.attributeTypeMap;
    };
    UserUpdatePayloadDto.discriminator = undefined;
    UserUpdatePayloadDto.attributeTypeMap = [
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
            "name": "userName",
            "baseName": "userName",
            "type": "string",
            "format": ""
        },
        {
            "name": "interests",
            "baseName": "interests",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        }
    ];
    return UserUpdatePayloadDto;
}());
exports.UserUpdatePayloadDto = UserUpdatePayloadDto;
//# sourceMappingURL=UserUpdatePayloadDto.js.map