"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsList = void 0;
var EventsList = (function () {
    function EventsList() {
    }
    EventsList.getAttributeTypeMap = function () {
        return EventsList.attributeTypeMap;
    };
    EventsList.discriminator = undefined;
    EventsList.mapping = undefined;
    EventsList.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Events>",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }
    ];
    return EventsList;
}());
exports.EventsList = EventsList;
//# sourceMappingURL=EventsList.js.map