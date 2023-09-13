<template>
    <form @submit.prevent="handleSubmit" class="auth-form">
        <h1>ISLAND</h1>
        <h2>Log in to your account to continue.</h2>
        <div>
            <input type="text" placeholder="Username" v-model="username" />
            <div v-if="auth.username">{{ auth.username }}</div>
        </div>
        <div>
            <input type="password" placeholder="Password" v-model="password" />
            <div v-if="auth.password">{{ auth.password }}</div>
        </div>
        <button type="submit">Sign In</button>
    </form>
</template>

<script setup>

import { ref } from 'vue';
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/stores/auth'; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

// const router = useRouter();

const username = ref('');
const password = ref('');

const { auth } = storeToRefs(useErrorStore());

const handleSubmit = async () => {
    await authenticateUser({
        username: username.value,
        password: password.value
    });
    if (authenticated.value) {
        window.location.href = '/';
    }
}

</script>