<script setup>
import TypeHeadingSectionSub from '../type/heading/TypeHeadingSectionSub.vue';

const query = groq`*[_type == "post" && defined(slug.current)]`;
const { data } = useSanityQuery(query);

const posts = ref([
{
    id: 1,
    title: 'Nye artister lansert for festivalåret 2023',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://s3-eu-west-1.amazonaws.com/appmiral-sonata-media/prod/performance/0051/29/thumb_5028275_performance_960.jpeg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Artister', href: '#' },
  },
  {
    id: 2,
    title: 'En ny keynote speaker lansert',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://s3-eu-west-1.amazonaws.com/appmiral-sonata-media/prod/performance/0051/29/thumb_5028158_performance_960.jpeg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Konferanse', href: '#' },
  },
  {
    id: 3,
    title: 'Nye sponsorer til Vill Vill Vest',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://s3-eu-west-1.amazonaws.com/appmiral-sonata-media/prod/performance/0051/29/thumb_5028289_performance_960.jpeg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Festival', href: '#' },
  },
])
</script>

<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="relative mx-auto sm:mt-20 mt-16 max-w-7xl px-6 lg:px-8">
        <div class="relative mx-auto -mt-4 pb-2 px-10 border border-gray-900 border-4 border-solid">
          <TypeHeadingSectionSub title="Nyheter" class="inline-block absolute -top-4 px-6 bg-white z-30"></TypeHeadingSectionSub>
            <div class="mt-16 mb-4 grid max-w-none auto-rows-fr grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <ArticlesNewsPost v-for="post in data" :key="post.id" :post="post" />
            </div>
        </div>
        <TypeLinkDisplay href="#" title="Se alle" class="inline-block absolute -bottom-3 right-20 px-6 bg-white z-30"></TypeLinkDisplay>
      </div>
    </div>
  </template>