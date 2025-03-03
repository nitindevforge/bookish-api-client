"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorResponseDto = void 0;
var AuthorResponseDto = (function () {
    function AuthorResponseDto() {
    }
    AuthorResponseDto.getAttributeTypeMap = function () {
        return AuthorResponseDto.attributeTypeMap;
    };
    AuthorResponseDto.discriminator = undefined;
    AuthorResponseDto.mapping = undefined;
    AuthorResponseDto.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "string",
            "format": ""
        },
        {
            "name": "createAt",
            "baseName": "createAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updateAt",
            "baseName": "updateAt",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return AuthorResponseDto;
}());
exports.AuthorResponseDto = AuthorResponseDto;
//# sourceMappingURL=AuthorResponseDto.js.map