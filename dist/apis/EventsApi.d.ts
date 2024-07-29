import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { EventPayloadDto } from '../models/EventPayloadDto';
import { EventResponseDto } from '../models/EventResponseDto';
import { EventsResponseDto } from '../models/EventsResponseDto';
export declare class EventsApiRequestFactory extends BaseAPIRequestFactory {
    eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<RequestContext>;
    eventControllerFindEventById(id: string, _options?: Configuration): Promise<RequestContext>;
    eventControllerFindEvents(page: number, limit?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class EventsApiResponseProcessor {
    eventControllerCreateEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventResponseDto>>;
    eventControllerFindEventByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventsResponseDto>>;
    eventControllerFindEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventsResponseDto>>;
}
