<template>
  <a-row class="payCount">
    <a-col :span="19">合计:{{totalPrice}}</a-col>
    <a-col :span="5">
      <a-button type="primary">去结算({{totalCount}})</a-button>
    </a-col>
  </a-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "payCount",

  computed: {
    ...mapGetters(["carList"]),
    totalPrice() {
      return (
        "￥" +
        this.carList
          .filter((item) => item.checkedList)
          .reduce((preValue, item) => preValue + item.price * item.count, 0)
          .toFixed(2)
      );
    },
    totalCount() {
      return this.carList
        .filter((item) => item.checkedList)
        .reduce((preValue, item) => preValue + item.count, 0);
    },
  },
  methods: {},
};
</script>

<style scoped>
.payCount {
  position: relative;
  height: 50px;
  line-height: 50px;
}
</style>