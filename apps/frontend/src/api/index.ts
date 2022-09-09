import { ShopList } from '../dto';
import { QueryObject, withQuery } from 'ufo';

const baseUrl = 'http://localhost:3000/';
const buildFullUrl = (endpoint: string) => baseUrl + endpoint;

interface Api {
    [ name: string ]: (params?: any) => Promise<any>;
}

const api: Api = {};

api.getShops = createApiMethodWithQueryParams<undefined, ShopList>({
    url: 'shops',
    method: 'get',
});

interface ApiMethodParams {
    method: string;
    url: string;
}

function createApiMethodWithQueryParams<RequestType extends QueryObject | undefined, ResponseType>(options: ApiMethodParams) {
    return (params: RequestType): Promise<ResponseType> => {
        const urlWithQuery = params
            ? withQuery(options.url, params)
            : options.url;

        const url = buildFullUrl(urlWithQuery);

        return fetch(url, { method: options.method }).then(r => r.json());
    };
}

function createApiMethodWithBodyJson<RequestType, ResponseType>(options: ApiMethodParams) {
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
};

export { api };
