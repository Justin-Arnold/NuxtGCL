<template>
    <div class="m-10">
        <MoleculeInputField v-model="test2">This is a Label</MoleculeInputField>
    </div>
    INPUT IS: {{test2}}
</template>

<script setup lang="ts">

const test = () => {
    alert('top test')
}

const test2 = ref('')
</script>

<style>

body {
    @apply dark:bg-slate-900
}

</style>
