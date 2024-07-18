"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsResponseDto = void 0;
var FriendsResponseDto = (function () {
    function FriendsResponseDto() {
    }
    FriendsResponseDto.getAttributeTypeMap = function () {
        return FriendsResponseDto.attributeTypeMap;
    };
    FriendsResponseDto.discriminator = undefined;
    FriendsResponseDto.attributeTypeMap = [
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
    return FriendsResponseDto;
}());
exports.FriendsResponseDto = FriendsResponseDto;
//# sourceMappingURL=FriendsResponseDto.js.map