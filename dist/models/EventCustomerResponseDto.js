"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCustomerResponseDto = void 0;
var EventCustomerResponseDto = (function () {
    function EventCustomerResponseDto() {
    }
    EventCustomerResponseDto.getAttributeTypeMap = function () {
        return EventCustomerResponseDto.attributeTypeMap;
    };
    EventCustomerResponseDto.discriminator = undefined;
    EventCustomerResponseDto.mapping = undefined;
    EventCustomerResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<EventCustomer>",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return EventCustomerResponseDto;
}());
exports.EventCustomerResponseDto = EventCustomerResponseDto;
//# sourceMappingURL=EventCustomerResponseDto.js.map