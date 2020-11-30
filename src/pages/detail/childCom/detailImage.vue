<template>
  <div v-if="Object.keys(detailInfo).length !==0">
    <h3>{{detailInfo.detailImage[0].key}}</h3>
    <div v-for="item in detailInfo.detailImage[0].list" :key="item.index">
      <img class="detailInfoImg" :src="item" @load="detailLoad" />
    </div>
  </div>
</template>

<script>

export default {
  name: "detailImage",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    detailLoad() {
      // if (!this.isLoad) {
      // console.log("detailLoad加载完成");
      this.$emit("loaded");
      // this.$refs.scorll.refresh();
      // this.isLoad = true;
      // }
    }
  }
};
</script>

<style scoped>
.detailInfoImg {
  width: 100%;
}
</style>