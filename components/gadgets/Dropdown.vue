<template>
    <div class="dropdown">
        <button class="dropdown" @click="onClickDropdown()">
            Ferdinand Talusan
            <img src="~/assets/svg/arrow.svg" width="16px" height="36px">
        </button>
        <div class="dropdown-content" v-if="dropdownActive">
            <div>Profile</div>
            <div style="color:rgba(239,68,68)" @click="onClickLogout()">Log Out</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';

const dropdownActive = ref(false);

const router = useRouter();

const { logoutUser } = useAuthStore();

const onClickDropdown = () => {
    dropdownActive.value = !dropdownActive.value;
}

const onClickLogout = () => {
    logoutUser();
    dropdownActive.value = false;
    router.push('/login');
}

const onClickOutsideDropdown = (event) => {
    if (!event.target.closest('.dropdown')) {
        dropdownActive.value = false;
    }
}

onMounted(() => {
    document.addEventListener('click', onClickOutsideDropdown);
});
</script>