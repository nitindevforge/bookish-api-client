"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyEventsResponseDto = void 0;
var MyEventsResponseDto = (function () {
    function MyEventsResponseDto() {
    }
    MyEventsResponseDto.getAttributeTypeMap = function () {
        return MyEventsResponseDto.attributeTypeMap;
    };
    MyEventsResponseDto.discriminator = undefined;
    MyEventsResponseDto.mapping = undefined;
    MyEventsResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "MyEvents",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return MyEventsResponseDto;
}());
exports.MyEventsResponseDto = MyEventsResponseDto;
//# sourceMappingURL=MyEventsResponseDto.js.map