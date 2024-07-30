"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentReadsResponse = void 0;
var RecentReadsResponse = (function () {
    function RecentReadsResponse() {
    }
    RecentReadsResponse.getAttributeTypeMap = function () {
        return RecentReadsResponse.attributeTypeMap;
    };
    RecentReadsResponse.discriminator = undefined;
    RecentReadsResponse.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<RecentReads>",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }
    ];
    return RecentReadsResponse;
}());
exports.RecentReadsResponse = RecentReadsResponse;
//# sourceMappingURL=RecentReadsResponse.js.map