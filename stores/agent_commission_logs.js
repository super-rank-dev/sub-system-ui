import { defineStore } from 'pinia';
import { SERVER_ADDRESS } from '~/api/key';

export const useAgentCommissionLogsStore = defineStore('agent_commission_logs', {
    state: () => ({
        transactions: []
    }),
    actions: {
        async fetchTransactions() {
            const { data, error } = await useFetch(`${SERVER_ADDRESS}/api/agent-commissions`, {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            });
            if (error.value) {
                console.log(error.value.data);
            } else {
                this.transactions = data.value;
            }
        },
        async fetchTransactionsByDate(startDate, endDate) {
            const { data, error } = await useFetch(`${SERVER_ADDRESS}/api/agent-commissions/by-date`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: { startDate, endDate }
            });
            if (error.value) {
                console.log(error.value.data);
            } else {
                this.transactions = data.value;
            }
        }
    },
});