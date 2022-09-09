<script lang="ts" setup>
import { onMounted } from 'vue';
import { useStoreShops } from '../../stores/shops';

const shopStore = useStoreShops();

onMounted(() => {
    shopStore.load();
});
</script>

<template>
    {{ shopStore.shops }}
</template>
