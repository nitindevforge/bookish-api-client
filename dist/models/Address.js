"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var Address = (function () {
    function Address() {
    }
    Address.getAttributeTypeMap = function () {
        return Address.attributeTypeMap;
    };
    Address.discriminator = undefined;
    Address.mapping = undefined;
    Address.attributeTypeMap = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string",
            "format": ""
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        }
    ];
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=Address.js.map