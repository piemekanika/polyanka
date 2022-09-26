import { ShopList, TypeList } from '../dto';
import { Api } from './types';
import { createApiMethodWithQueryParams, createApiMethodWithBodyJson } from './api-builders';

const api: Api = {};

api.getShops = createApiMethodWithQueryParams<undefined, ShopList>({
    url: 'shops',
    method: 'get',
});

api.getTypes = createApiMethodWithQueryParams<undefined, TypeList>({
    url: 'types',
    method: 'get',
});

api.getShopsByTypes = createApiMethodWithQueryParams<any, ShopList>({
    url: 'shopByTypes',
    method: 'get',
});


export { api };
