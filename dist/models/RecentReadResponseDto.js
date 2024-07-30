"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentReadResponseDto = void 0;
var RecentReadResponseDto = (function () {
    function RecentReadResponseDto() {
    }
    RecentReadResponseDto.getAttributeTypeMap = function () {
        return RecentReadResponseDto.attributeTypeMap;
    };
    RecentReadResponseDto.discriminator = undefined;
    RecentReadResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "RecentReads",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return RecentReadResponseDto;
}());
exports.RecentReadResponseDto = RecentReadResponseDto;
//# sourceMappingURL=RecentReadResponseDto.js.map