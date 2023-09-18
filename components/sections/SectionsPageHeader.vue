<script setup>
    defineProps({
        title: String,
    })
</script>

<template>
    <div class="my-10">
        <TypeHeadingPage :title="title" />
    </div>
</template>