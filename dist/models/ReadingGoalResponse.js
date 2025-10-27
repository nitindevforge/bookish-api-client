"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingGoalResponse = void 0;
var ReadingGoalResponse = (function () {
    function ReadingGoalResponse() {
    }
    ReadingGoalResponse.getAttributeTypeMap = function () {
        return ReadingGoalResponse.attributeTypeMap;
    };
    ReadingGoalResponse.discriminator = undefined;
    ReadingGoalResponse.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "UserDetails",
            "format": ""
        },
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
        },
        {
            "name": "bookReadGoalCount",
            "baseName": "bookReadGoalCount",
            "type": "number",
            "format": ""
        }
    ];
    return ReadingGoalResponse;
}());
exports.ReadingGoalResponse = ReadingGoalResponse;
//# sourceMappingURL=ReadingGoalResponse.js.map