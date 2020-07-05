<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  height: 49px;
  box-shadow: 0 -1px 2px rgba(100, 100, 100, 0.2);
  background-color: #fff;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
