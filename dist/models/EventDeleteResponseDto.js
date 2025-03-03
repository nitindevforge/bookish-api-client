"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDeleteResponseDto = void 0;
var EventDeleteResponseDto = (function () {
    function EventDeleteResponseDto() {
    }
    EventDeleteResponseDto.getAttributeTypeMap = function () {
        return EventDeleteResponseDto.attributeTypeMap;
    };
    EventDeleteResponseDto.discriminator = undefined;
    EventDeleteResponseDto.mapping = undefined;
    EventDeleteResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
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
    return EventDeleteResponseDto;
}());
exports.EventDeleteResponseDto = EventDeleteResponseDto;
//# sourceMappingURL=EventDeleteResponseDto.js.map