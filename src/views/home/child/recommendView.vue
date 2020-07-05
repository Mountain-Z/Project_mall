<template>
  <div>
    <div class="r-item">
      <div v-for="item in recommend" :key="item.title" clss="recommendView">
        <a :href="item.link">
          <img :src="item.image" alt />
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendView",
  props: {
    recommend: Array
  }
};
</script>

<style scoped>
.r-item {
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
  text-align: center;
}
.recommendView {
  flex: 1;
  /* width: 100%; */
}

.r-item img {
  width: 100%;
  margin-bottom: 10px;
}
</style>