"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityResponseDto = void 0;
var ActivityResponseDto = (function () {
    function ActivityResponseDto() {
    }
    ActivityResponseDto.getAttributeTypeMap = function () {
        return ActivityResponseDto.attributeTypeMap;
    };
    ActivityResponseDto.discriminator = undefined;
    ActivityResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "ActivityResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return ActivityResponseDto;
}());
exports.ActivityResponseDto = ActivityResponseDto;
//# sourceMappingURL=ActivityResponseDto.js.map