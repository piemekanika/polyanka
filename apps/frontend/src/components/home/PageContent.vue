<script lang="ts" setup="">
import {onMounted} from "vue";
import {api} from "../../api";

onMounted(() => {
    api.getShops()
})
</script>

<template>
    index
</template>
