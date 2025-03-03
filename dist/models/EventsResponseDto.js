"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsResponseDto = void 0;
var EventsResponseDto = (function () {
    function EventsResponseDto() {
    }
    EventsResponseDto.getAttributeTypeMap = function () {
        return EventsResponseDto.attributeTypeMap;
    };
    EventsResponseDto.discriminator = undefined;
    EventsResponseDto.mapping = undefined;
    EventsResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "EventsList",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return EventsResponseDto;
}());
exports.EventsResponseDto = EventsResponseDto;
//# sourceMappingURL=EventsResponseDto.js.map