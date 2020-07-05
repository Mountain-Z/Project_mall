<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">首页</div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="probeType"
      :pull-up-load="pullUpLoad"
      @postPosition="getPosition"
      @loadFinish="loadPage"
    >
      <show-swiper :banner="banner" />
      <recommendView :recommend="recommend" />
      <sub-bar class="sub-control" :title="title" @pullIndex="getIndex" />
      <good-list :goodsList="goodsList[cType].list"></good-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import showSwiper from "./child/showSwiper";
import recommendView from "./child/recommendView";
import goodList from "content/good/goodList";
import scroll from "common/scroll/scroll";

import backTop from "content/backTop/backTop";

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
      },
      isShow: false,
      probeType: 3,
      pullUpLoad: true
    };
  },
  components: {
    NavBar,
    showSwiper,
    recommendView,
    subBar,
    goodList,
    scroll,
    backTop
  },
  created() {
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });

    this.getHomeProducts("pop");
    this.getHomeProducts("new");
    this.getHomeProducts("sell");

    this.$bus.$on("imgLoad", () => {
      this.$refs.scroll.scroll.refresh();
    });
  },

  methods: {
    loadPage() {
      this.getHomeProducts(this.cType);
    },
    getPosition(position) {
      this.isShow = position.y < -1000;
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    getHomeProducts(type) {
      getHomeData(type, this.goodsList[type].page).then(res => {
        this.goodsList[type].list.push(...res.data.list);
        this.goodsList[type].page += 1;
        this.$refs.scroll.scroll.finishPullUp();
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

<style scoped>
#home {
  /* height: 100vh; */
  padding-top: 44px;
}
.content {
  position: absolute;
  bottom: 49px;
  top: 44px;
  right: 0;
  left: 0;
  overflow: hidden;
}
.nav-bar {
  background-color: var(--color-high-text);
  font-weight: 700;
  color: #fff;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
}
.recommend {
  display: flex;
}
.recomend-item {
  flex: 1;
}
/* .sub-control {
  position: sticky;
  top: 44px;
  z-index: 9;
} */
</style>