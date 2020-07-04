<template>
  <div class="sub-bar">
    <div class="sub-item" v-for="(item,index) in title" :key="item" @click="itemClick(index)">
      <span :class="{'item-active':currentIndex == index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "subBar",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    title: Array
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style>
.sub-bar {
  display: flex;
  height: 30px;
  color: black;
}
.sub-item {
  flex: 1;
  /* width: 40px; */
  text-align: center;
}
.sub-item span {
  padding: 5px;
}
.item-active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>