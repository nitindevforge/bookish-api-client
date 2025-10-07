"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppfeepercentageResponseDto = void 0;
var AppfeepercentageResponseDto = (function () {
    function AppfeepercentageResponseDto() {
    }
    AppfeepercentageResponseDto.getAttributeTypeMap = function () {
        return AppfeepercentageResponseDto.attributeTypeMap;
    };
    AppfeepercentageResponseDto.discriminator = undefined;
    AppfeepercentageResponseDto.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return AppfeepercentageResponseDto;
}());
exports.AppfeepercentageResponseDto = AppfeepercentageResponseDto;
//# sourceMappingURL=AppfeepercentageResponseDto.js.map