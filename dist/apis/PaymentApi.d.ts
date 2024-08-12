import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CardListResponseDto } from '../models/CardListResponseDto';
import { PaymentPayloadDto } from '../models/PaymentPayloadDto';
import { PaymentResponseDto } from '../models/PaymentResponseDto';
import { StripeCreatePayloadDto } from '../models/StripeCreatePayloadDto';
import { StripePaymentPayloadDto } from '../models/StripePaymentPayloadDto';
import { StripeResponseDto } from '../models/StripeResponseDto';
export declare class PaymentApiRequestFactory extends BaseAPIRequestFactory {
    paymentControllerCreatePayment(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Promise<RequestContext>;
    paymentControllerCreatePaymentIntent(stripeCreatePayloadDto: StripeCreatePayloadDto, _options?: Configuration): Promise<RequestContext>;
    paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Promise<RequestContext>;
    paymentControllerGetCardList(_options?: Configuration): Promise<RequestContext>;
}
export declare class PaymentApiResponseProcessor {
    paymentControllerCreatePaymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaymentResponseDto>>;
    paymentControllerCreatePaymentIntentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StripeResponseDto>>;
    paymentControllerDeleteCardDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardListResponseDto>>;
    paymentControllerGetCardListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardListResponseDto>>;
}
