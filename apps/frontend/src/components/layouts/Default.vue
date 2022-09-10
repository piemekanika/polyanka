<script lang="ts" setup="">
/* ... */
import Footer from './default/Footer.vue';
import Header from './default/Header.vue';
</script>

<template>
    <div>
        <div>
            <Header></Header>
        </div>

        <slot>
            no slot content provided
        </slot>

        <div>
            <Footer></Footer>
        </div>
    </div>
</template>
