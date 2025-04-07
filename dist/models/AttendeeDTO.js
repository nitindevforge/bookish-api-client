"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeDTO = void 0;
var AttendeeDTO = (function () {
    function AttendeeDTO() {
    }
    AttendeeDTO.getAttributeTypeMap = function () {
        return AttendeeDTO.attributeTypeMap;
    };
    AttendeeDTO.discriminator = undefined;
    AttendeeDTO.attributeTypeMap = [
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
            "name": "eventId",
            "baseName": "eventId",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventTitle",
            "baseName": "eventTitle",
            "type": "string",
            "format": ""
        }
    ];
    return AttendeeDTO;
}());
exports.AttendeeDTO = AttendeeDTO;
//# sourceMappingURL=AttendeeDTO.js.map