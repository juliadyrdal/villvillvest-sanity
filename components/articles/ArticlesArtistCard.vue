<script setup>
    const props = defineProps(['post'])
</script>

<template>
    <article class="flex flex-col items-start">
      <NuxtLink :to="`/lineup/${post.slug.current}`">
          <div class="relative w-full">
          <!--  <img :src="post.imageURL" alt="" class="aspect-square w-full bg-gray-100 object-cover" /> -->
            <SanityImage :asset-id="post.cover.asset._ref" auto="format" />
            <div class="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="relative max-w-xl">
            <div class="absolute bottom-12 lg:bottom-10 left-4 z-30">
              <TypeHeadingDisplaySmall :title="post.name" />
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              
            </div>
          </div>
        </NuxtLink>
      </article>
</template>