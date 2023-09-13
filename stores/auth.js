import { defineStore } from 'pinia';
import { SERVER_ADDRESS } from '~/api/key';
import jwt_decode from 'jwt-decode';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        user: {}
    }),
    actions: {
        async authenticateUser({ username, password }) {
            // useFetch from nuxt 3
            const { data, error } = await useFetch(`${SERVER_ADDRESS}/api/users/login`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    username,
                    password,
                },
            });

            if (error.value) {
                const { username, password } = error.value.data;
                if (username) alert(username);
                else alert(password);
            } else {
                if (data.value) {
                    const token = useCookie('token'); // useCookie new hook in nuxt 3
                    token.value = data?.value?.token; // set token to cookie
                    this.authenticated = true; // set authenticated  state value to true
                    this.user = jwt_decode(token.value);
                }
            }
        },
        logoutUser() {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            this.authenticated = false; // set authenticated  state value to false
            token.value = null; // clear the token cookie
        },
    },
});