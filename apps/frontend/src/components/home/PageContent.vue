<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useStoreShops } from '../../stores/shops';
import ShopList from './ShopList.vue';

const shopStore = useStoreShops();
let selectedTypes = ref([]);
onMounted(() => {
    shopStore.load();
});

function filterByType() {
  shopStore.filterByTypes(selectedTypes)
}
</script>

<template>
    <div v-for="type in shopStore.types" :key="type">
        <label :for="type">{{type}}</label>
        <input type="checkbox" :id="type" :value="type" @change="filterByType" v-model="selectedTypes">
    </div>
    <ShopList />
</template>
