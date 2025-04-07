"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyEventResponseDto = void 0;
var MyEventResponseDto = (function () {
    function MyEventResponseDto() {
    }
    MyEventResponseDto.getAttributeTypeMap = function () {
        return MyEventResponseDto.attributeTypeMap;
    };
    MyEventResponseDto.discriminator = undefined;
    MyEventResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "MyEventsResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return MyEventResponseDto;
}());
exports.MyEventResponseDto = MyEventResponseDto;
//# sourceMappingURL=MyEventResponseDto.js.map