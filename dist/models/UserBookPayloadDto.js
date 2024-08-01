"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookPayloadDto = void 0;
var UserBookPayloadDto = (function () {
    function UserBookPayloadDto() {
    }
    UserBookPayloadDto.getAttributeTypeMap = function () {
        return UserBookPayloadDto.attributeTypeMap;
    };
    UserBookPayloadDto.discriminator = undefined;
    UserBookPayloadDto.attributeTypeMap = [
        {
            "name": "bookId",
            "baseName": "bookId",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
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
            "name": "review",
            "baseName": "review",
            "type": "string",
            "format": ""
        }
    ];
    return UserBookPayloadDto;
}());
exports.UserBookPayloadDto = UserBookPayloadDto;
//# sourceMappingURL=UserBookPayloadDto.js.map