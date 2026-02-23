"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactDetailsDto = void 0;
var ContactDetailsDto = (function () {
    function ContactDetailsDto() {
    }
    ContactDetailsDto.getAttributeTypeMap = function () {
        return ContactDetailsDto.attributeTypeMap;
    };
    ContactDetailsDto.discriminator = undefined;
    ContactDetailsDto.attributeTypeMap = [
        {
            "name": "synced",
            "baseName": "synced",
            "type": "boolean",
            "format": ""
        }
    ];
    return ContactDetailsDto;
}());
exports.ContactDetailsDto = ContactDetailsDto;
//# sourceMappingURL=ContactDetailsDto.js.map