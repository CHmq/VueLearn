<template>
  <a-row class="tabview">
    <!-- <div
      v-for="(item, index) in titles"
      :key="item.index"
      :class="currentIndex === index ?'active':'' "
    >-->
    <div
      v-for="(item, index) in titles"
      :key="item.index"
      :class="{active:currentIndex === index}"
      @click="activeClick(index)"
    >
      <a-col :span="num">{{item}}</a-col>
    </div>
  </a-row>
</template>

<script>
export default {
  name: "tabContol",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    },
    num:{
      type:Number,
      default(){
        return 0
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    activeClick(index) {
      this.currentIndex = index;
      this.$emit('goodsClick',index)
    }
  }
};
</script>

<style>
.tabview {
  text-align: center;
  box-shadow: 0px -3px 5px #ccc;
  border-bottom: 1px solid #ccc;
  background: #fff;
  line-height: 44px;
  color:#000
}
</style>