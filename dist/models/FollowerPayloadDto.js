"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowerPayloadDto = void 0;
var FollowerPayloadDto = (function () {
    function FollowerPayloadDto() {
    }
    FollowerPayloadDto.getAttributeTypeMap = function () {
        return FollowerPayloadDto.attributeTypeMap;
    };
    FollowerPayloadDto.discriminator = undefined;
    FollowerPayloadDto.attributeTypeMap = [
        {
            "name": "follower",
            "baseName": "follower",
            "type": "string",
            "format": ""
        }
    ];
    return FollowerPayloadDto;
}());
exports.FollowerPayloadDto = FollowerPayloadDto;
//# sourceMappingURL=FollowerPayloadDto.js.map