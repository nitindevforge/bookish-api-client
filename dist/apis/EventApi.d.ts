import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { EventPayloadDto } from '../models/EventPayloadDto';
import { EventResponseDto } from '../models/EventResponseDto';
import { EventsResponseDto } from '../models/EventsResponseDto';
export declare class EventApiRequestFactory extends BaseAPIRequestFactory {
    eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<RequestContext>;
    eventControllerGetEvents(_options?: Configuration): Promise<RequestContext>;
    eventControllerUpdateEvent(id: any, eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class EventApiResponseProcessor {
    eventControllerCreateEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventResponseDto>>;
    eventControllerGetEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventsResponseDto>>;
    eventControllerUpdateEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventResponseDto>>;
}
