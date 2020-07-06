<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">首页</div>
    </nav-bar>
    <sub-bar class="sub-control" :title="title" @pullIndex="getIndex" v-show="subShow" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="probeType"
      :pull-up-load="pullUpLoad"
      @postPosition="getPosition"
      @loadFinish="loadPage"
    >
      <show-swiper :banner="banner" @postSwipper="getSwipper" />
      <recommendView :recommend="recommend" />
      <sub-bar :title="title" @pullIndex="getIndex" ref="subShow" />
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
import subBar from "content/subBar/subBar";

import { getHomeMultidata, getHomeData } from "network/home";

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
      pullUpLoad: true,
      subShow: false,
      subTop: 0
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
    //模板创建前获取服务器信息
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });

    this.getHomeProducts("pop");
    this.getHomeProducts("new");
    this.getHomeProducts("sell");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 500);

    //利用事件线获取图片加载完成事件，进行防抖处理
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
  },
  methods: {
    //轮播图加载完成后刷新副标题据顶部位置
    getSwipper() {
      this.subTop = this.$refs.subShow.$el.offsetTop;
    },

    //商品展示防抖处理
    debounce(fun, delay) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fun.apply(this, args);
        }, delay);
      };
    },

    //下拉加载更多
    loadPage() {
      this.getHomeProducts(this.cType);
    },

    //控制返回到顶部以及浮标题的显示
    getPosition(position) {
      this.isShow = position.y < -1000;
      this.subShow = -this.subTop > position.y;
    },
    //控制返回的位置
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },

    //获取服务器信息
    getHomeProducts(type) {
      getHomeData(type, this.goodsList[type].page).then(res => {
        this.goodsList[type].list.push(...res.data.list);
        this.goodsList[type].page += 1;
        this.$refs.scroll.scroll.finishPullUp();
      });
    },
    //监听副标题点击事件
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
  height: 100vh;
  /* padding-top: 44px; */
  /* position: relative; */
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
.sub-control {
  position: relative;
  top: 44px;
  z-index: 10;
}
</style>