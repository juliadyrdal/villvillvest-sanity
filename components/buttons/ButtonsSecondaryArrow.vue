<script setup>
    defineProps({
        title: String,
        href: String,
    })
</script>

<template>
    <a href="href" class="text-md font-semibold leading-6 text-white">{{ title }} <span aria-hidden="true">→</span></a>
</template>
