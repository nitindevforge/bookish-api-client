import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CardListResponseDto } from '../models/CardListResponseDto';
import { PaymentPayloadDto } from '../models/PaymentPayloadDto';
import { StripeResponseDto } from '../models/StripeResponseDto';
export declare class PaymentApiRequestFactory extends BaseAPIRequestFactory {
    paymentControllerCreatePayment(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Promise<RequestContext>;
    paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Promise<RequestContext>;
    paymentControllerGetCardList(_options?: Configuration): Promise<RequestContext>;
}
export declare class PaymentApiResponseProcessor {
    paymentControllerCreatePaymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StripeResponseDto>>;
    paymentControllerDeleteCardDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardListResponseDto>>;
    paymentControllerGetCardListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardListResponseDto>>;
}
