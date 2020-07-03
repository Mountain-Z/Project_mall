<template>
  <div id="SwiperBar">
    <nav-bar></nav-bar>
    <swiper>
      <swiper-item></swiper-item>
    </swiper>
    <!-- <h2>{{swiperData}}</h2> -->
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import { getSwiper } from "network/home";

import { Swiper, SwiperItem } from "common/swiper/index";

export default {
  name: "home",
  data() {
    return {
      swiperData: null
    };
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  create() {
    getSwiper().then(res => {
      this.swiperData = res;
      console.log(res);
    });
  }
};
</script>

<style>
</style>