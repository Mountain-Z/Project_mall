<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      protoType: 3,
      pullUpLoad: true,
      click: true
    });
    this.scroll.scrollTo(0, 0, 500);
  }
};
</script>

<style scoped>
</style>

