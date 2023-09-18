<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<script setup>
    const props = defineProps(['tabs'])
</script>

<template>
    <div>
        <div class="border-2 border-gray-900">
          <nav class="-mb-px flex" aria-label="Tabs">
            <a v-for="tab in tabs" :key="tab.name" @click="$emit('changeTab')" :class="[tab.current ? 'border-gray-900 text-primary-base' : 'border-transparent text-gray-900 hover:border-gray-300 hover:text-gray-700', 'w-1/2 border-b-4 py-4 px-1 text-center text-sm font-medium cursor-pointer text-xl uppercase font-display font-bold']" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
          </nav>
        </div>
    </div>
  </template>