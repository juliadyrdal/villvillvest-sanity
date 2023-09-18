<script setup>
const query = groq`*[_type == "speaker" && defined(slug.current)]`;
const { data } = useSanityQuery(query);


</script>

<template>
    <div class="mx-auto pb-10">
        <div class="mt-16 mb-4 grid max-w-none auto-rows-fr grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <ArticlesSessionCard v-for="post in data" :key="post._id" :post="post" />
        </div>
    </div>
  </template>