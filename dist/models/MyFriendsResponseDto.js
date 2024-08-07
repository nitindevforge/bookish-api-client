"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFriendsResponseDto = void 0;
var MyFriendsResponseDto = (function () {
    function MyFriendsResponseDto() {
    }
    MyFriendsResponseDto.getAttributeTypeMap = function () {
        return MyFriendsResponseDto.attributeTypeMap;
    };
    MyFriendsResponseDto.discriminator = undefined;
    MyFriendsResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "MyFriendsResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return MyFriendsResponseDto;
}());
exports.MyFriendsResponseDto = MyFriendsResponseDto;
//# sourceMappingURL=MyFriendsResponseDto.js.map