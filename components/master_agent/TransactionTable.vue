<template>
    <div class="transaction-table">
        <table>
            <thead>
                <th>TRANSACTIONS</th>
                <th>DEBIT</th>
                <th>CREDIT</th>
                <th>DATE COMPUTED</th>
            </thead>
            <tbody>
                <tr v-for="transaction in transactions" :key="transaction._id">
                    <td>{{ commissionDate(transaction.datetime) }}</td>
                    <td>{{ transaction.betAmount }}</td>
                    <td>{{ transaction.commissionAmount }}</td>
                    <td>{{ computedDate(transaction.datetime) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAgentCommissionLogsStore } from '~/stores/agent_commission_logs';

const { fetchTransactions } = useAgentCommissionLogsStore();
const { transactions } = storeToRefs(useAgentCommissionLogsStore());

await fetchTransactions();

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const commissionDate = (date) => {
    const standardDate = new Date(date);
    const localDate = new Date(standardDate.toLocaleString());
    return `Commission ${monthNames[localDate.getMonth()]} ${localDate.getDate()}`;
}

const computedDate = (date) => {
    const standardDate = new Date(date);
    const localDate = new Date(standardDate.toLocaleString());
    localDate.setDate(localDate.getDate() + 1);
    return `${monthNames[localDate.getMonth()]} ${localDate.getDay()}, ${localDate.getFullYear()}`;
}

</script>