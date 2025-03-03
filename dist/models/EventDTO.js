"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDTO = void 0;
var EventDTO = (function () {
    function EventDTO() {
    }
    EventDTO.getAttributeTypeMap = function () {
        return EventDTO.attributeTypeMap;
    };
    EventDTO.discriminator = undefined;
    EventDTO.mapping = undefined;
    EventDTO.attributeTypeMap = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "string",
            "format": ""
        },
        {
            "name": "attendees",
            "baseName": "attendees",
            "type": "Array<AttendeeDTO>",
            "format": ""
        }
    ];
    return EventDTO;
}());
exports.EventDTO = EventDTO;
//# sourceMappingURL=EventDTO.js.map