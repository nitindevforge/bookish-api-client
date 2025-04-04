"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCustomer = void 0;
var EventCustomer = (function () {
    function EventCustomer() {
    }
    EventCustomer.getAttributeTypeMap = function () {
        return EventCustomer.attributeTypeMap;
    };
    EventCustomer.discriminator = undefined;
    EventCustomer.mapping = undefined;
    EventCustomer.attributeTypeMap = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }
    ];
    return EventCustomer;
}());
exports.EventCustomer = EventCustomer;
//# sourceMappingURL=EventCustomer.js.map