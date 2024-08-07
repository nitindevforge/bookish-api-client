"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAllFriendsResponseDto = void 0;
var MyAllFriendsResponseDto = (function () {
    function MyAllFriendsResponseDto() {
    }
    MyAllFriendsResponseDto.getAttributeTypeMap = function () {
        return MyAllFriendsResponseDto.attributeTypeMap;
    };
    MyAllFriendsResponseDto.discriminator = undefined;
    MyAllFriendsResponseDto.attributeTypeMap = [
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
    return MyAllFriendsResponseDto;
}());
exports.MyAllFriendsResponseDto = MyAllFriendsResponseDto;
//# sourceMappingURL=MyAllFriendsResponseDto.js.map