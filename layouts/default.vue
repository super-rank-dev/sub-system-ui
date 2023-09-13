<template>
    <div>
        <Appbar />
        <Toolbar />
        <slot />
    </div>
</template>

<script setup>
import Appbar from '~/components/layout/Appbar.vue';
import Toolbar from '~/components/layout/Toolbar.vue';
</script>