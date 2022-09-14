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
        <div class="flex">
            <div class="grow lg:text-lg text-2xl font-bold">
                {{ props.shop.name }}
            </div>

            <div class="flex items-baseline lg:text-lg text-2xl">
                <div class="self-center text-base mr-1">
                    ⭐
                </div>

                {{ props.shop.rate }}

                <div class="lg:text-sm text-base">
                    /5
                </div>
            </div>
        </div>

        <div class="opacity-70 text-lg lg:text-base">
            {{ props.shop.description }}
        </div>

        <div class="my-4 overflow-x-auto">
            <div class="flex min-w-[min-content]">
                <div
                    v-for="photo in props.shop.photos"
                    class="rounded-md mr-2 cursor-pointer"
                    style="width: 150px; height: 200px; background-color: lightgray;"
                    :style="{ backgroundImage: `url(${photo.url})` }"
                ></div>
            </div>
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
