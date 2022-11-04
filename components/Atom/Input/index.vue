<template>
    <!-- <input class="gcl-input" :value="modelValue" @input="customEmit" :type="type"> -->
    <input type="text" aria-describedby="filled_success_help"
    class="
    block appearance-none rounded-t w-full border-0 border-b-2 border-primary-light bg-slate-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900
    dark:bg-gray-700 dark:border-neutral-light  dark:text-white dark:focus:border-green-500
    focus:outline-none focus:ring-0 focus:border-primary-core"
    placeholder=" "
    v-model="modelValue"
    @input="customEmit"
    />
</template>

<script setup lang="ts">

const props = defineProps<{
    modelValue?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

function customEmit() {
    emit('update:modelValue', props.modelValue || '')
}
</script>





