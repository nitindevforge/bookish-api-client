"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyEventsPayloadDTO = void 0;
var MyEventsPayloadDTO = (function () {
    function MyEventsPayloadDTO() {
    }
    MyEventsPayloadDTO.getAttributeTypeMap = function () {
        return MyEventsPayloadDTO.attributeTypeMap;
    };
    MyEventsPayloadDTO.discriminator = undefined;
    MyEventsPayloadDTO.attributeTypeMap = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string",
            "format": ""
        }
    ];
    return MyEventsPayloadDTO;
}());
exports.MyEventsPayloadDTO = MyEventsPayloadDTO;
//# sourceMappingURL=MyEventsPayloadDTO.js.map