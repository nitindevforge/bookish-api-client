"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFriendPayloadDto = void 0;
var MyFriendPayloadDto = (function () {
    function MyFriendPayloadDto() {
    }
    MyFriendPayloadDto.getAttributeTypeMap = function () {
        return MyFriendPayloadDto.attributeTypeMap;
    };
    MyFriendPayloadDto.discriminator = undefined;
    MyFriendPayloadDto.mapping = undefined;
    MyFriendPayloadDto.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "search",
            "baseName": "search",
            "type": "string",
            "format": ""
        }
    ];
    return MyFriendPayloadDto;
}());
exports.MyFriendPayloadDto = MyFriendPayloadDto;
//# sourceMappingURL=MyFriendPayloadDto.js.map