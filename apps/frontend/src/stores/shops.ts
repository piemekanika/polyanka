import { defineStore } from 'pinia';
import type { ShopList } from '../dto';
import { api } from '../api';

export const useStoreShops = defineStore('shops', {
    state() {
        return {
            shops: ([] as ShopList['shops']),
            types: ([] as string[])
        };
    },
    getters: {
        shopCount: state => state.shops.length,
    },
    actions: {
        load() {
            api.getShops()
                .then(({ shops }) => {
                    this.shops = shops;
                })

            api.getTypes()
                .then(({ types }) => {
                    this.types = types;
                })
        },
    },
});
