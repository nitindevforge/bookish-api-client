"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventResponseDto = void 0;
var EventResponseDto = (function () {
    function EventResponseDto() {
    }
    EventResponseDto.getAttributeTypeMap = function () {
        return EventResponseDto.attributeTypeMap;
    };
    EventResponseDto.discriminator = undefined;
    EventResponseDto.mapping = undefined;
    EventResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Events",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return EventResponseDto;
}());
exports.EventResponseDto = EventResponseDto;
//# sourceMappingURL=EventResponseDto.js.map