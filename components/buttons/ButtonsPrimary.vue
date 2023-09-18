<script setup>
    defineProps({
        title: String,
        href: String,
    })
</script>

<template>
    <a :href="href" class="bg-neutral-50 text-gray-900 border-gray-900 border-2 px-6 py-2.5 text-base font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">{{ title }}</a>
</template>