import { QueryObject, withQuery } from 'ufo';
import { ApiMethodParams } from './types';

const baseUrl = import.meta.env.VITE_API_URL;
const buildFullUrl = (endpoint: string) => baseUrl + endpoint;

export function createApiMethodWithQueryParams<RequestType extends QueryObject | undefined, ResponseType>(options: ApiMethodParams) {
    return (params: RequestType): Promise<ResponseType> => {
        const urlWithQuery = params
            ? withQuery(options.url, params)
            : options.url;

        const url = buildFullUrl(urlWithQuery);

        return fetch(url, { method: options.method }).then(r => r.json());
    };
}

export function createApiMethodWithBodyJson<RequestType, ResponseType>(options: ApiMethodParams) {
    return (params: RequestType): Promise<ResponseType> => {

        const body = JSON.stringify(params);

        const url = buildFullUrl(options.url);

        return fetch(url, {
            method: options.method,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body,
        })
            .then(r => r.json());
    };
}
