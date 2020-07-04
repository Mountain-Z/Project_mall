<template>
  <div id="SwiperBar">
    <nav-bar class="nav-bar">
      <div slot="center">首页</div>
    </nav-bar>
    <show-swiper :banner="banner" />
    <recommendView :recommend="recommend" />
    <sub-bar :title="title" />
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import showSwiper from "./child/showSwiper";
import recommendView from "./child/recommendView";
import { getHomeMultidata } from "network/home";
import subBar from "content/subBar/subBar";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      title: ["流行", "新款", "精选"]
    };
  },
  components: {
    NavBar,
    showSwiper,
    recommendView,
    subBar
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  }
};
</script>

<style>
.nav-bar {
  background-color: var(--color-high-text);
}
.recommend {
  display: flex;
}
.recomend-item {
  flex: 1;
}
</style>