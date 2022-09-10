<script setup lang="ts">
import { Shop } from '../../dto';
import Button from '../ui/Button.vue';

const props = defineProps<{ shop: Shop }>();
</script>

<template>
    <div class="text-left my-5 p-4 rounded-md border">
        <div class="font-medium text-lg">
            {{ props.shop.name }}
        </div>

        <div class="opacity-70">
            {{ props.shop.description }}
        </div>

        <div class="mt-4 mb-6 flex">
            <div
                v-for="n in 3"
                class="rounded-md mr-2 cursor-pointer"
                style="width: 100px; height: 100px; background-color: gray;"
            ></div>
        </div>

        <div class="mt-4">
            <Button>
                перейти на сайт магазина
            </Button>
        </div>
    </div>
</template>
