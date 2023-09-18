<script setup>
    const props = defineProps(['post'])
</script>

<template>
    <article class="flex flex-col items-start">
      <NuxtLink :to="`/news/${post.slug.current}`">
          <div class="relative w-full">
            <SanityImage :asset-id="post.cover.asset._ref" auto="format" />
            <div class="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="max-w-xl">
            <div class="mt-4 flex items-center gap-x-4 text-xs">
              <!--<time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>-->
              <!--<a :href="post.category.href" class="relative z-10 bg-gray-50 px-3 py-1 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>-->
            </div>
            <div class="group relative">
              <TypeLinkLarge>
                  <span class="absolute inset-0" />
                  {{ post.title }}
              </TypeLinkLarge>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              
            </div>
          </div>
          </NuxtLink>
        </article>
</template>