"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPayloadDto = void 0;
var EventPayloadDto = (function () {
    function EventPayloadDto() {
    }
    EventPayloadDto.getAttributeTypeMap = function () {
        return EventPayloadDto.attributeTypeMap;
    };
    EventPayloadDto.discriminator = undefined;
    EventPayloadDto.attributeTypeMap = [
        {
            "name": "name1",
            "baseName": "name1",
            "type": "string",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        }
    ];
    return EventPayloadDto;
}());
exports.EventPayloadDto = EventPayloadDto;
//# sourceMappingURL=EventPayloadDto.js.map