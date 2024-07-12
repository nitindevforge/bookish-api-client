"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendResponseDto = void 0;
var FriendResponseDto = (function () {
    function FriendResponseDto() {
    }
    FriendResponseDto.getAttributeTypeMap = function () {
        return FriendResponseDto.attributeTypeMap;
    };
    FriendResponseDto.discriminator = undefined;
    FriendResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<UserDetails>",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }
    ];
    return FriendResponseDto;
}());
exports.FriendResponseDto = FriendResponseDto;
//# sourceMappingURL=FriendResponseDto.js.map