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
    EventsList.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Events>",
            "format": ""
        }
    ];
    return EventsList;
}());
exports.EventsList = EventsList;
//# sourceMappingURL=EventsList.js.map