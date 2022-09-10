<script setup lang="ts">
import { useStoreShops } from '../../stores/shops';
import Shop from './Shop.vue';

const shopStore = useStoreShops();
</script>

<template>
    <Shop
        v-for="shop in shopStore.shops"
        :key="shop.id"
        :shop="shop"
    ></Shop>
</template>
