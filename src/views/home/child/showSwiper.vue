<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banner" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" :title="item.title" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper/index";

export default {
  name: "showSwiper",
  props: {
    banner: Array
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
</style>