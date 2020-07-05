<template>
  <div class="scrollList">
    <div class="good-list">
      <div v-for="(item,index) in goodsList" :key="index">
        <good-list-item :good-item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import goodListItem from "./goodListItem";
export default {
  name: "goodList",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    goodsList: Array
  },
  components: {
    goodListItem
  }
};
</script>

<style scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>