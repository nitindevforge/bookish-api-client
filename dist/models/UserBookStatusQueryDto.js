"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookStatusQueryDto = void 0;
var UserBookStatusQueryDto = (function () {
    function UserBookStatusQueryDto() {
    }
    UserBookStatusQueryDto.getAttributeTypeMap = function () {
        return UserBookStatusQueryDto.attributeTypeMap;
    };
    UserBookStatusQueryDto.discriminator = undefined;
    UserBookStatusQueryDto.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "search",
            "baseName": "search",
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
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        }
    ];
    return UserBookStatusQueryDto;
}());
exports.UserBookStatusQueryDto = UserBookStatusQueryDto;
//# sourceMappingURL=UserBookStatusQueryDto.js.map