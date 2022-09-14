<script setup lang="ts">
import { Shop } from '../../dto';
import Button from '../ui/Button.vue';
import Badge from '../ui/Badge.vue';

const props = defineProps<{ shop: Shop }>();

function goToShop() {
    window.open(props.shop.shopLink, '_blank')?.focus();
}
</script>

<template>
    <div class="bg-white text-left my-5 p-4 rounded-md shadow-lg">
        <div class="text-lg font-bold">
            {{ props.shop.name }}
        </div>

        <div class="opacity-70">
            {{ props.shop.description }}
        </div>

        <div class="my-4 flex">
            <div
                v-for="photo in props.shop.photos"
                class="rounded-md mr-2 cursor-pointer"
                style="width: 140px; height: 140px; background-color: gray;"
                :style="{ backgroundImage: `url(${photo.url})` }"
            ></div>
        </div>

        <div class="my-6 flex">
            <Badge
                v-for="badge in props.shop.badges"
                :key="badge.label"
                :color="badge.color"
                :label="badge.label"
                class="mr-2"
            />
        </div>

        <div class="mt-4">
            <Button @click="goToShop">
                перейти на сайт магазина
            </Button>
        </div>
    </div>
</template>
