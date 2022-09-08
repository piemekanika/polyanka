import { ShopList } from '../dto';

const baseUrl = 'http://localhost:3000/'
const getUrl = (endpoint: string) => baseUrl + endpoint

const api = {

    getShops(): Promise<ShopList> {
        return fetch(getUrl('shop-list')).then(r => r.json())
    },
}

export { api }
