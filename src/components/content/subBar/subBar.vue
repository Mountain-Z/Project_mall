<template>
  <div>
    <div class="sub-bar">
      <div class="sub-item" v-for="(item,index) in title" :key="item" @click="itemClick(index)">
        <span :class="{'item-active':currentIndex == index}">{{item}}</span>
      </div>
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
      this.$emit("pullIndex", index);
    }
  }
};
</script>

<style scoped>
.sub-bar {
  display: flex;
  height: 30px;
  line-height: 30px;
  color: black;
  background-color: #fff;
  text-align: center;
}
.sub-item {
  flex: 1;
  width: 40px;
}
.sub-item span {
  /* margin-top: 5px; */
  padding: 3px;
}
.item-active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>