<script setup>
    const route = useRoute();

    const query = groq`*[ _type == "speaker" && slug.current == $slug][0]`;
    const { data: speaker } = await useSanityQuery(query, {
        slug: route.params.slug,
    });
</script>

<template>
    <p>hallo</p>
    <p>{{ speaker }}</p>
</template>