<script setup>
    defineProps({
        title: String,
        href: String,
    })
</script>

<template>
    <h2 class="font-bold font-display-medium text-xl text-gray-900">
      <a :href="href">{{ title }} <span class="pl-2" aria-hidden="true">→</span></a>  
    </h2>
</template>