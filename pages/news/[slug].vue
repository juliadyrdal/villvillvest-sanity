<script setup>
    const route = useRoute();

    const query = groq`*[ _type == "post" && slug.current == $slug][0]`;
    const { data: post } = await useSanityQuery(query, {
        slug: route.params.slug,
    });
</script>

<template>
    <p>hallo</p>
    <p>{{ post }}</p>
</template>