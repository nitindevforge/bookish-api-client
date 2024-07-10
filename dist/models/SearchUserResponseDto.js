"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchUserResponseDto = void 0;
var SearchUserResponseDto = (function () {
    function SearchUserResponseDto() {
    }
    SearchUserResponseDto.getAttributeTypeMap = function () {
        return SearchUserResponseDto.attributeTypeMap;
    };
    SearchUserResponseDto.discriminator = undefined;
    SearchUserResponseDto.attributeTypeMap = [
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
    return SearchUserResponseDto;
}());
exports.SearchUserResponseDto = SearchUserResponseDto;
//# sourceMappingURL=SearchUserResponseDto.js.map