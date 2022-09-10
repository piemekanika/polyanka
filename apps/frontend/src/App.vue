<script setup lang="ts">
import Default from './components/layouts/Default.vue';
</script>

<template>
    <component :is="Default">
        <router-view></router-view>
    </component>
</template>
