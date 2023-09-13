<template>
    <NuxtLayout name="default">
        <div class="transactions container">
            <FilterForm />
            <TransactionSummary />
            <TransactionTable />
        </div>
    </NuxtLayout>
</template>

<script setup>
import FilterForm from '~/components/master_agent/FilterForm.vue';
import TransactionSummary from '~/components/master_agent/TransactionSummary.vue';
import TransactionTable from '~/components/master_agent/TransactionTable.vue';
definePageMeta({
    middleware: ['auth']
});
</script>