<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banner" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" :title="item.title" @load="swipperLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper/index";

export default {
  name: "showSwiper",
  data() {
    return {
      post: false
    };
  },
  props: {
    banner: Array
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swipperLoad() {
      if (!this.post) {
        this.$emit("postSwipper");
        this.post = true;
      }
    }
  }
};
</script>

<style scoped>
</style>