<template>
  <div class="good-list">
    <div v-for="(item,index) in goodsList" :key="index">
      <good-list-item :good-item="item" />
    </div>
  </div>
</template>

<script>
import goodListItem from "./goodListItem";
export default {
  name: "goodList",
  props: {
    goodsList: Array
  },
  components: {
    goodListItem
  }
};
</script>

<style>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>