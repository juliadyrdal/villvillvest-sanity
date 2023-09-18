<script setup>
import TypeHeadingSectionSub from '../type/heading/TypeHeadingSectionSub.vue';

const query = groq`*[_type == "post" && defined(slug.current)]`;
const { data } = useSanityQuery(query);

</script>

<template>
    <div class="mx-auto pb-10">
        <div class="mt-16 mb-4 grid max-w-2xl auto-rows-fr grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <ArticlesPostCard v-for="post in data" :key="post.id" :post="post" />
        </div>
    </div>
  </template>