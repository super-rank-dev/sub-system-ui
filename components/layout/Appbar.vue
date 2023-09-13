<template>
    <div class="appbar">
        <div class="container">
            <div class="logo">
                <img src="~/assets/svg/logo.svg" width="36px" height="36px">
                <div>GP Subsystem</div>
            </div>
            <div class="action">
                <Dropdown />
            </div>
        </div>
    </div>
</template>

<script setup>
import Dropdown from '~/components/gadgets/Dropdown.vue';
</script>