"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentReadsResponseDto = void 0;
var RecentReadsResponseDto = (function () {
    function RecentReadsResponseDto() {
    }
    RecentReadsResponseDto.getAttributeTypeMap = function () {
        return RecentReadsResponseDto.attributeTypeMap;
    };
    RecentReadsResponseDto.discriminator = undefined;
    RecentReadsResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "RecentReadsResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return RecentReadsResponseDto;
}());
exports.RecentReadsResponseDto = RecentReadsResponseDto;
//# sourceMappingURL=RecentReadsResponseDto.js.map