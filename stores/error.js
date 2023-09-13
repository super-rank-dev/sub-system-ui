import { defineStore } from 'pinia';

export const useErrorStore = defineStore('error', {
    state: () => ({
        auth: {}
    }),
    actions: {
        setAuthError(error) {
            this.auth = error;
        }
    },
});