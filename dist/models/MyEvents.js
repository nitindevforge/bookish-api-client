"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyEvents = void 0;
var MyEvents = (function () {
    function MyEvents() {
    }
    MyEvents.getAttributeTypeMap = function () {
        return MyEvents.attributeTypeMap;
    };
    MyEvents.discriminator = undefined;
    MyEvents.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "MyEventsResponse",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }
    ];
    return MyEvents;
}());
exports.MyEvents = MyEvents;
//# sourceMappingURL=MyEvents.js.map