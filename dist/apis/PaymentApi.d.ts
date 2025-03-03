import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { BusinessConnectedAccount } from '../models/BusinessConnectedAccount';
import { CardListResponseDto } from '../models/CardListResponseDto';
import { PaymentPayloadDto } from '../models/PaymentPayloadDto';
import { PaymentResponseDto } from '../models/PaymentResponseDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripePaymentPayloadDto } from '../models/StripePaymentPayloadDto';
import { StripeResponseDto } from '../models/StripeResponseDto';
import { VerificationLinkResponseDTO } from '../models/VerificationLinkResponseDTO';
export declare class PaymentApiRequestFactory extends BaseAPIRequestFactory {
    paymentControllerConnectAccount(_options?: Configuration): Promise<RequestContext>;
    paymentControllerCreateAccountVerificationLink(_options?: Configuration): Promise<RequestContext>;
    paymentControllerCreatePayment(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Promise<RequestContext>;
    paymentControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<RequestContext>;
    paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Promise<RequestContext>;
    paymentControllerGetCardList(_options?: Configuration): Promise<RequestContext>;
    paymentControllerRetrieveConnectedAccount(_options?: Configuration): Promise<RequestContext>;
}
export declare class PaymentApiResponseProcessor {
    paymentControllerConnectAccountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BusinessConnectedAccount>>;
    paymentControllerCreateAccountVerificationLinkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VerificationLinkResponseDTO>>;
    paymentControllerCreatePaymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaymentResponseDto>>;
    paymentControllerCreatePaymentIntentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<StripeResponseDto>>;
    paymentControllerDeleteCardDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardListResponseDto>>;
    paymentControllerGetCardListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardListResponseDto>>;
    paymentControllerRetrieveConnectedAccountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BusinessConnectedAccount>>;
}
