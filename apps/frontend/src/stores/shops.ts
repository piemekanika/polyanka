import { defineStore } from 'pinia';
import type { ShopList, TypeList } from '../dto';
import { api } from '../api';

export const useStoreShops = defineStore('shops', {
    state() {
        return {
            shops: ([] as ShopList['shops']),
            types: ([] as TypeList[])
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

        filterByTypes(types: string[]) {
            api.getShopsByTypes(types._rawValue)
                .then(({shops}) => {
                    this.shops = shops;
                });
        }
    },
});
