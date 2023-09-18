<script setup>
    defineProps({
        href: String,
    })
</script>

<template>
    <h3 class="mt-2 text-3xl lg:text-xl font-bold uppercase leading-6 text-gray-900">
        <a :href="href" class="hover:underline decoration-secondary-base decoration-2 underline-offset-4">
            <slot />
        </a>
    </h3>
</template>