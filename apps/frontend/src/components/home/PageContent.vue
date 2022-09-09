<script lang="ts" setup>
import { onMounted } from 'vue';
import { useStoreShops } from '../../stores/shops';
import ShopList from './ShopList.vue';

const shopStore = useStoreShops();

onMounted(() => {
    shopStore.load();
});
</script>

<template>
    <ShopList />
</template>
