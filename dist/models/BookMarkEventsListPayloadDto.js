"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMarkEventsListPayloadDto = void 0;
var BookMarkEventsListPayloadDto = (function () {
    function BookMarkEventsListPayloadDto() {
    }
    BookMarkEventsListPayloadDto.getAttributeTypeMap = function () {
        return BookMarkEventsListPayloadDto.attributeTypeMap;
    };
    BookMarkEventsListPayloadDto.discriminator = undefined;
    BookMarkEventsListPayloadDto.mapping = undefined;
    BookMarkEventsListPayloadDto.attributeTypeMap = [
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        }
    ];
    return BookMarkEventsListPayloadDto;
}());
exports.BookMarkEventsListPayloadDto = BookMarkEventsListPayloadDto;
//# sourceMappingURL=BookMarkEventsListPayloadDto.js.map