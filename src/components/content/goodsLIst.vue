<template>
  <div class="goods">
    <div v-for="item in goodsItems" :key="item.key" class="goodslist">
      <div class="goodsitem" @click="itemClick(item.iid)">
        <img :src="item.image ? item.image : item.show.img" alt @load="load"/>
        <h5>{{item.title}}</h5>
        <span>￥{{item.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsList",
  props: {
    goodsItems: {
      typpe: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage(item) {
      // console.log(item)
      return 
    }
  },
  methods: {
    itemClick(iid) {
      this.$router.push("/detail/" + iid);
      // query路由
      // this.$router.push(
      //  { path : '/detail',
      //  query:{}
      //  }
      // )
    },
    load() {
      if (!this.isLoad) {
          this.$emit('loaded')
        // this.$refs.scorll.refresh();
        this.isLoad = true;
      }
    }
  }
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
}
.goodslist {
  width: 48%;
}
.goodslist .goodsitem {
  padding: 10px;
}
.goodslist img {
  width: 100%;
  border-radius: 15px;
  margin-bottom: 10px;
}
.goodslist h5 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>