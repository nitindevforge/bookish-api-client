"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyEventsResponse = void 0;
var MyEventsResponse = (function () {
    function MyEventsResponse() {
    }
    MyEventsResponse.getAttributeTypeMap = function () {
        return MyEventsResponse.attributeTypeMap;
    };
    MyEventsResponse.discriminator = undefined;
    MyEventsResponse.mapping = undefined;
    MyEventsResponse.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "Events",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentId",
            "baseName": "paymentId",
            "type": "string",
            "format": ""
        }
    ];
    return MyEventsResponse;
}());
exports.MyEventsResponse = MyEventsResponse;
//# sourceMappingURL=MyEventsResponse.js.map