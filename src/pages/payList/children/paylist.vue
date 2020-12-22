<template>
  <div class="paylist">
    <Scorll class="payContent" ref="scorll">
      <a-row class="payProduct" v-for="(item,index) in payList" :key="index">
        <a-col :span="7" class="productImg">
          <img :src="item.image" alt />
        </a-col>
        <a-col :span="17" class="productInfo">
          <h3 class="productTitle">{{item.title}}</h3>
          <div>
            <h4 class="productPrice">￥{{item.price}}</h4>
            <h4 class="productCount">
              <span>x{{item.count}}</span>
            </h4>
          </div>
        </a-col>
      </a-row>
    </Scorll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Scorll from "components/content/scroll";

export default {
  name: "paylist",
  components: {
    Scorll,
  },
  computed: {
    ...mapGetters(["payList"]),
  },
  activated() {
    this.$refs.scorll.refresh();
  },
};
</script>

<style scoped>
.paylist {
  height: calc(100vh - 44px - 49px - 80px);
  overflow: hidden;
}
.payContent {
  height: 100%;
}
.payProduct {
  padding: 10px;
  border-bottom: 1px solid #a7a7a7;
  box-shadow: 0 1px 5px #3c3c3c33;
}
.productImg img {
  width: 100%;
  height: 120px;
}
.productTitle,
.productDce {
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.productInfo {
  padding: 10px;
}
.productPrice {
  color: #f6c44a;
  font-size: 20px;
  display: inline-block;
  float: left;
}
.productCount {
  color: #000;
  font-size: 20px;
  display: inline-block;
  float: right;
}
</style>