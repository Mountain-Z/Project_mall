<template>
  <div id="item" @click="itemClick">
    <div v-show="!isActive"><slot name="icon"></slot></div>
    <div v-show="isActive"><slot name="active-icon"></slot></div>
    <div><slot name="text"></slot></div>
  </div>
</template>

<script>
import TabBarVue from "./TabBar.vue";
export default {
  name: "TabBarItem",
  props: {
    link: String
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link);
    }
  }
};
</script>

<style>
#item {
  flex: 1;
  text-align: center;
}
#item img {
  height: 24px;
  width: 24px;
}
</style>
