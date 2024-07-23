"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = (function () {
    function Card() {
    }
    Card.getAttributeTypeMap = function () {
        return Card.attributeTypeMap;
    };
    Card.discriminator = undefined;
    Card.attributeTypeMap = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string",
            "format": ""
        },
        {
            "name": "checks",
            "baseName": "checks",
            "type": "CardChecks",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayBrand",
            "baseName": "display_brand",
            "type": "string",
            "format": ""
        },
        {
            "name": "expMonth",
            "baseName": "exp_month",
            "type": "number",
            "format": ""
        },
        {
            "name": "expYear",
            "baseName": "exp_year",
            "type": "number",
            "format": ""
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string",
            "format": ""
        },
        {
            "name": "funding",
            "baseName": "funding",
            "type": "string",
            "format": ""
        },
        {
            "name": "generatedFrom",
            "baseName": "generated_from",
            "type": "any",
            "format": ""
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string",
            "format": ""
        },
        {
            "name": "networks",
            "baseName": "networks",
            "type": "CardNetwork",
            "format": ""
        },
        {
            "name": "threeDSecureUsage",
            "baseName": "three_d_secure_usage",
            "type": "CardSecure",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "any",
            "format": ""
        }
    ];
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=Card.js.map