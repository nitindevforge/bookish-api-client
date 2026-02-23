"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactDetails = void 0;
var ContactDetails = (function () {
    function ContactDetails() {
    }
    ContactDetails.getAttributeTypeMap = function () {
        return ContactDetails.attributeTypeMap;
    };
    ContactDetails.discriminator = undefined;
    ContactDetails.attributeTypeMap = [
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
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "mobileNumber",
            "baseName": "mobileNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "mobile",
            "baseName": "mobile",
            "type": "string",
            "format": ""
        }
    ];
    return ContactDetails;
}());
exports.ContactDetails = ContactDetails;
//# sourceMappingURL=ContactDetails.js.map