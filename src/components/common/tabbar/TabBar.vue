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

<style>
#tab-bar {
  display: flex;
  height: 49px;
  box-shadow: 0 -10 2 rgba(100, 100, 100, 0.2);
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
