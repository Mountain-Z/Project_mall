<template>
  <div class="list-item">
    <a :href="goodItem.link">
      <img :src="goodItem.show.img" alt @load="imgPost" />
      <div class="goods-info">
        <p>{{goodItem.title}}</p>
        <span class="price">{{goodItem.price}}</span>
        <span class="collect">{{goodItem.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "goodListItem",
  props: {
    goodItem: Object
  },
  methods: {
    imgPost() {
      this.$bus.$emit("imgLoad");
    }
  }
};
</script>
<style scoped>
.list-item {
  position: relative;
  width: 150px;
  padding-bottom: 40px;
}
.list-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>