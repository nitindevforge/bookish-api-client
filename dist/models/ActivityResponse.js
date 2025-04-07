"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityResponse = void 0;
var ActivityResponse = (function () {
    function ActivityResponse() {
    }
    ActivityResponse.getAttributeTypeMap = function () {
        return ActivityResponse.attributeTypeMap;
    };
    ActivityResponse.discriminator = undefined;
    ActivityResponse.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Activity>",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }
    ];
    return ActivityResponse;
}());
exports.ActivityResponse = ActivityResponse;
//# sourceMappingURL=ActivityResponse.js.map