<script setup>
    defineProps({
        job: String,
        name: String,
        phone: String,
        email: String,
    })
</script>

<template>
    <TypeHeadingSectionSub :title="job" />
    <ul role="list" class="mt-4">
        <li>
            <ul class="flex gap-3">
                <li class="inline-block"><p class="text-md leading-6 text-gray-900 hover:text-black">{{ name }}</p></li>
                <li class="inline-block"><p class="text-md leading-6 text-gray-900 hover:text-black">{{ phone }}</p></li>
            </ul>
        </li>
        <li>
            <a class="text-md leading-6 text-gray-900 hover:text-gray-900">{{ email }}</a>
        </li>
    </ul>
</template>