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
            "name": "title",
            "baseName": "title",
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
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "noOfTickets",
            "baseName": "noOfTickets",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "place",
            "baseName": "place",
            "type": "Places",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "book",
            "baseName": "book",
            "type": "string",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string",
            "format": ""
        }
    ];
    return EventPayloadDto;
}());
exports.EventPayloadDto = EventPayloadDto;
//# sourceMappingURL=EventPayloadDto.js.map