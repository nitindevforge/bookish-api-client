import { RequestContext } from "../http/http";
export interface SecurityAuthentication {
    getName(): string;
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}
export interface TokenProvider {
    getToken(): Promise<string> | string;
}
export declare class BearerAuthentication implements SecurityAuthentication {
    private tokenProvider;
    constructor(tokenProvider: TokenProvider);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): Promise<void>;
}
export type AuthMethods = {
    "default"?: SecurityAuthentication;
    "bearer"?: SecurityAuthentication;
};
export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = {
    "username": string;
    "password": string;
};
export type HttpBearerConfiguration = {
    tokenProvider: TokenProvider;
};
export type OAuth2Configuration = {
    accessToken: string;
};
export type HttpSignatureConfiguration = unknown;
export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication;
    "bearer"?: HttpBearerConfiguration;
};
export declare function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods;
