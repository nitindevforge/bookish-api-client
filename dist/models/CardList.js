"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardList = void 0;
var CardList = (function () {
    function CardList() {
    }
    CardList.getAttributeTypeMap = function () {
        return CardList.attributeTypeMap;
    };
    CardList.discriminator = undefined;
    CardList.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "allowRedisplay",
            "baseName": "allow_redisplay",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingDetails",
            "baseName": "billing_details",
            "type": "BillingDetails",
            "format": ""
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "Card",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "any",
            "format": ""
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }
    ];
    return CardList;
}());
exports.CardList = CardList;
//# sourceMappingURL=CardList.js.map