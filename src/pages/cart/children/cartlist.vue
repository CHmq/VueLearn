<template>
  <div class="cartlist">
    <Scorll class="cartContent" ref="scorll">
      <!-- <div v-for="(item,index) in carList" :key="index">{{item}}</div> -->
      <Cartproduce v-for="(item,index) in carList" :key="index" :product="item" />
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
    ...mapGetters(["carList"])
  },
  activated() {
    this.$refs.scorll.refresh();
  }
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
</style>