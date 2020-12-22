<template>
  <div class="cartlist">
    <Scorll class="cartContent" ref="scorll">
      <!-- <div v-for="(item,index) in carList" :key="index">{{item}}</div> -->
      <!-- <div v-show="this.$store.state.carList.length===0?true:false"> -->
      <div v-if="carList.length!==0">
        <Cartproduce v-for="(item,index) in carList" :key="index" :product="item" />
      </div>
      <div v-else>
        <img class="cartListImg" src="../../../assets/image/cart.gif" alt />
        <h2  class="cartListTitle">您的购物车空空如也</h2>
      </div>
    </Scorll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Scorll from "components/content/scroll";
import Cartproduce from "./cartproduce";

export default {
  name: "cartlist",
  components: {
    Scorll,
    Cartproduce,
  },
  computed: {
    ...mapGetters(["carList"]),
  },
  activated() {
    this.$refs.scorll.refresh();
  },
};
</script>

<style scoped>
.cartlist {
  height: calc(100vh - 44px - 49px - 50px);
  overflow: hidden;
}
.cartContent {
  height: 100%;
}
.cartListImg {
  width: 100%;
}
.cartListTitle{
  text-align: center;
  margin-top: 30px;
}
</style>