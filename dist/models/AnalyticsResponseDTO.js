"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsResponseDTO = void 0;
var AnalyticsResponseDTO = (function () {
    function AnalyticsResponseDTO() {
    }
    AnalyticsResponseDTO.getAttributeTypeMap = function () {
        return AnalyticsResponseDTO.attributeTypeMap;
    };
    AnalyticsResponseDTO.discriminator = undefined;
    AnalyticsResponseDTO.mapping = undefined;
    AnalyticsResponseDTO.attributeTypeMap = [
        {
            "name": "totalTicketsSold",
            "baseName": "totalTicketsSold",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalSales",
            "baseName": "totalSales",
            "type": "number",
            "format": ""
        },
        {
            "name": "attendeesList",
            "baseName": "attendeesList",
            "type": "Array<EventDTO>",
            "format": ""
        }
    ];
    return AnalyticsResponseDTO;
}());
exports.AnalyticsResponseDTO = AnalyticsResponseDTO;
//# sourceMappingURL=AnalyticsResponseDTO.js.map