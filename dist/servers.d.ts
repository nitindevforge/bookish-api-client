import { RequestContext, HttpMethod } from "./http/http";
export interface BaseServerConfiguration {
    makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext;
}
export declare class ServerConfiguration<T extends {
    [key: string]: string;
}> implements BaseServerConfiguration {
    private url;
    private variableConfiguration;
    constructor(url: string, variableConfiguration: T);
    setVariables(variableConfiguration: Partial<T>): void;
    getConfiguration(): T;
    private getUrl;
    makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext;
}
export declare const server1: ServerConfiguration<{
    scheme: "http" | "https";
    host: "localhost:3000";
}>;
export declare const servers: ServerConfiguration<{
    scheme: "http" | "https";
    host: "localhost:3000";
}>[];
