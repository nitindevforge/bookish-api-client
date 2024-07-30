"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentReadPayloadDto = void 0;
var RecentReadPayloadDto = (function () {
    function RecentReadPayloadDto() {
    }
    RecentReadPayloadDto.getAttributeTypeMap = function () {
        return RecentReadPayloadDto.attributeTypeMap;
    };
    RecentReadPayloadDto.discriminator = undefined;
    RecentReadPayloadDto.attributeTypeMap = [
        {
            "name": "bookId",
            "baseName": "bookId",
            "type": "string",
            "format": ""
        }
    ];
    return RecentReadPayloadDto;
}());
exports.RecentReadPayloadDto = RecentReadPayloadDto;
//# sourceMappingURL=RecentReadPayloadDto.js.map