import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { EventPayloadDto } from '../models/EventPayloadDto';
import { EventResponseDto } from '../models/EventResponseDto';
import { EventsResponseDto } from '../models/EventsResponseDto';
import { MyEventResponseDto } from '../models/MyEventResponseDto';
import { MyEventsResponseDto } from '../models/MyEventsResponseDto';
export declare class EventsApiRequestFactory extends BaseAPIRequestFactory {
    eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<RequestContext>;
    eventControllerFinMyEvent(eventId: string, _options?: Configuration): Promise<RequestContext>;
    eventControllerFinMyEvents(page: number, limit: number, _options?: Configuration): Promise<RequestContext>;
    eventControllerFindEventById(id: string, _options?: Configuration): Promise<RequestContext>;
    eventControllerFindEvents(page: number, limit?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class EventsApiResponseProcessor {
    eventControllerCreateEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventResponseDto>>;
    eventControllerFinMyEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MyEventResponseDto>>;
    eventControllerFinMyEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MyEventsResponseDto>>;
    eventControllerFindEventByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventResponseDto>>;
    eventControllerFindEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventsResponseDto>>;
}
