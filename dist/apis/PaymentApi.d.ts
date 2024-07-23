import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CardListResponseDto } from '../models/CardListResponseDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripeResponseDto } from '../models/StripeResponseDto';
export declare class PaymentApiRequestFactory extends BaseAPIRequestFactory {
    stripeControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<RequestContext>;
    stripeControllerGetCardList(_options?: Configuration): Promise<RequestContext>;
}
export declare class PaymentApiResponseProcessor {
    stripeControllerCreatePaymentIntentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StripeResponseDto>>;
    stripeControllerGetCardListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardListResponseDto>>;
}
