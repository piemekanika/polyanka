import { ShopList } from '../dto';
import { Api } from './types';
import { createApiMethodWithQueryParams } from './api-builders';

const api: Api = {};

api.getShops = createApiMethodWithQueryParams<undefined, ShopList>({
    url: 'shops',
    method: 'get',
});

export { api };
