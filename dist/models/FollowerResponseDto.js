"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowerResponseDto = void 0;
var FollowerResponseDto = (function () {
    function FollowerResponseDto() {
    }
    FollowerResponseDto.getAttributeTypeMap = function () {
        return FollowerResponseDto.attributeTypeMap;
    };
    FollowerResponseDto.discriminator = undefined;
    FollowerResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Follower",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return FollowerResponseDto;
}());
exports.FollowerResponseDto = FollowerResponseDto;
//# sourceMappingURL=FollowerResponseDto.js.map