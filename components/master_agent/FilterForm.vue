<template>
    <form @submit.prevent="handleSubmit" class="filter-form">
        <input type="date" placeholder="Start Date" v-model="startDate" />To
        <input type="date" placeholder="End Date" v-model="endDate" />
        <button type="submit" @click="filterData()">FILTER</button>
        <button @click="exportData()">EXPORT</button>
    </form>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAgentCommissionLogsStore } from '~/stores/agent_commission_logs';
// import { exportExcel } from '~/utils/export';

const { fetchTransactionsByDate } = useAgentCommissionLogsStore();
const { transactions } = storeToRefs(useAgentCommissionLogsStore());

const startDate = ref('');
const endDate = ref('');

const handleSubmit = async () => {
    console.log('Submitted!');
}

const dateFormat = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const filterData = () => {
    fetchTransactionsByDate(startDate, endDate);
}

// const exportData = () => {
//     exportExcel(transactions.value, 'default');
// }

if (transactions.value[0]) {
    startDate.value = dateFormat(new Date(transactions.value[0].datetime));
    endDate.value = dateFormat(new Date());
}
</script>