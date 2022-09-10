<script setup lang="ts">
const props = defineProps<{
    label: string
    color: string
}>()
</script>

<template>
    <div class="border rounded-full font-bold w-[fit-content] py-1 px-4">
        {{ props.label }}
    </div>
</template>
