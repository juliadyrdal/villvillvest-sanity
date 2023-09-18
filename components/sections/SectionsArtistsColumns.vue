<script setup>
const swiper = useSwiper()

const query = groq`*[_type == "artist" && defined(slug.current)]`;
const { data } = useSanityQuery(query);

</script>

<template>
    <div class="mx-auto pb-2 mt-16 mb-4">
       <!-- <div class="mt-16 mb-4 mx-auto grid max-w-none auto-rows-fr grid-cols-1 gap-10 lg:mx-auto lg:max-w-none lg:grid-cols-3"> -->
            <Swiper
        :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }"
        :height="300"
        :modules="[SwiperNavigation, SwiperPagination, SwiperA11y, SwiperVirtual]"
        :slides-per-view="3"
        :space-between="40"
        :navigation="true"
        grab-cursor
        virtual
      >

        <SwiperSlide v-for="post in data" :key="post.id" class="">
          <div class="">
            <ArticlesArtistCard :post="post" />
          </div>
        </SwiperSlide>

      </Swiper>
            
        </div>
   <!-- </div> -->
  </template>