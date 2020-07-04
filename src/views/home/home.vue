<template>
  <div id="SwiperBar">
    <nav-bar class="nav-bar">
      <div slot="center">首页</div>
    </nav-bar>
    <show-swiper :banner="banner" />
    <recommendView :recommend="recommend" />
    <sub-bar class="sub-control" :title="title" @pullIndex="getIndex" />
    <good-list :goodsList="goodsList[cType].list"></good-list>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import showSwiper from "./child/showSwiper";
import recommendView from "./child/recommendView";
import goodList from "content/good/goodList";

import { getHomeMultidata, getHomeData } from "network/home";
import subBar from "content/subBar/subBar";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      title: ["流行", "新款", "精选"],
      index: 0,
      cType: "pop",
      goodsList: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      }
    };
  },
  components: {
    NavBar,
    showSwiper,
    recommendView,
    subBar,
    goodList
  },
  created() {
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });

    this.getHomeProducts("pop");
    this.getHomeProducts("new");
    this.getHomeProducts("sell");
  },

  methods: {
    getHomeProducts(type) {
      getHomeData(type, this.goodsList[type].page).then(res => {
        this.goodsList[type].list.push(...res.data.list);
        console.log(this.goodsList);
        this.goodsList[type].page += 1;
        // this.$refs.scroll.finishPullUp();
      });
    },

    getIndex(index) {
      this.index = index;
      switch (index) {
        case 0:
          this.cType = "pop";
          break;
        case 1:
          this.cType = "new";
          break;
        case 2:
          this.cType = "sell";
          break;
      }
    }
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
.sub-control {
  position: sticky;
  top: 0px;
}
</style>