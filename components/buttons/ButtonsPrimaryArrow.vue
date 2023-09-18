<script setup>
    defineProps({
        title: String,
        href: String,
    })
</script>

<template>
    <a :href="href" class="bg-neutral-50 px-6 py-2.5 text-md text-gray-900 border-gray-900 border-2 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ title }} <span aria-hidden="true">&rarr;</span></a>
</template>
