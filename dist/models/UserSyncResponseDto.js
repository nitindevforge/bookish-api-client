"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSyncResponseDto = void 0;
var UserSyncResponseDto = (function () {
    function UserSyncResponseDto() {
    }
    UserSyncResponseDto.getAttributeTypeMap = function () {
        return UserSyncResponseDto.attributeTypeMap;
    };
    UserSyncResponseDto.discriminator = undefined;
    UserSyncResponseDto.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return UserSyncResponseDto;
}());
exports.UserSyncResponseDto = UserSyncResponseDto;
//# sourceMappingURL=UserSyncResponseDto.js.map