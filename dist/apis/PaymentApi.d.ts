import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CardListResponseDto } from '../models/CardListResponseDto';
import { PaymentDeleteResponseDto } from '../models/PaymentDeleteResponseDto';
import { PaymentPayloadDto } from '../models/PaymentPayloadDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripePaymentPayloadDto } from '../models/StripePaymentPayloadDto';
import { StripeResponseDto } from '../models/StripeResponseDto';
export declare class PaymentApiRequestFactory extends BaseAPIRequestFactory {
    paymentControllerCreatePayment(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Promise<RequestContext>;
    paymentControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<RequestContext>;
    paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Promise<RequestContext>;
    paymentControllerDeletePayment(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Promise<RequestContext>;
    paymentControllerGetCardList(_options?: Configuration): Promise<RequestContext>;
}
export declare class PaymentApiResponseProcessor {
    paymentControllerCreatePaymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StripeResponseDto>>;
    paymentControllerCreatePaymentIntentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StripeResponseDto>>;
    paymentControllerDeleteCardDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardListResponseDto>>;
    paymentControllerDeletePaymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaymentDeleteResponseDto>>;
    paymentControllerGetCardListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardListResponseDto>>;
}
