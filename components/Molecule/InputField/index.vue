<template>
    <div class="relative">
        <AtomInput v-model="modelValue" @input="$emit('update:modelValue', modelValue)" class="peer"></AtomInput>
        <label for="input" class="pointer-events-none absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-primary-core peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            <slot/>
        </label>
    </div>
</template>

<script setup lang="ts">

const input = ref(undefined)
const props = defineProps<{
    modelValue?: string
}>()

const test2 = ref('')



</script>