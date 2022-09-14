<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    label: string
    color: string
}>();

const classList = computed(() => {
    return `badge badge--${props.color}`;
});
</script>

<template>
    <div
        class="rounded-full font-bold w-[fit-content] py-1 px-4"
        :class="classList"
    >
        {{ props.label }}
    </div>
</template>

<style lang="scss">
.badge {
    &--green {
        background-color: #B3E1BA;
    }

    &--red {
        background-color: #E1B3B3;
    }
}
</style>
