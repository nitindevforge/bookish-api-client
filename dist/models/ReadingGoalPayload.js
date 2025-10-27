"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingGoalPayload = void 0;
var ReadingGoalPayload = (function () {
    function ReadingGoalPayload() {
    }
    ReadingGoalPayload.getAttributeTypeMap = function () {
        return ReadingGoalPayload.attributeTypeMap;
    };
    ReadingGoalPayload.discriminator = undefined;
    ReadingGoalPayload.attributeTypeMap = [
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "string",
            "format": ""
        },
        {
            "name": "bookReadGoal",
            "baseName": "bookReadGoal",
            "type": "number",
            "format": ""
        },
        {
            "name": "noOffYear",
            "baseName": "noOffYear",
            "type": "number",
            "format": ""
        }
    ];
    return ReadingGoalPayload;
}());
exports.ReadingGoalPayload = ReadingGoalPayload;
//# sourceMappingURL=ReadingGoalPayload.js.map