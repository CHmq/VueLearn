<template>
  <a-row class="carCount">
    <a-col :span="5">
      <a-checkbox :checked="isSelect" @click="checkAll">全选</a-checkbox>
    </a-col>
    <a-col :span="12">合计:{{totalPrice}}</a-col>
    <a-col :span="5">
      <a-button type="primary" @click="toBuy">去结算({{totalCount}})</a-button>
    </a-col>
  </a-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "carCount",
  //   data(){
  //       return {
  //           Checked:true
  //       }
  //   },
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
    isSelect() {
      //   return !this.carList.filter(item => !item.checkedList).length;
      if (this.carList.length === 0) return false;
      return !this.carList.find((item) => !item.checkedList);
    },
    isPay() {
      return !this.carList.find((item) => item.checkedList);
    },
  },
  methods: {
    checkAll() {
      if (this.isSelect) {
        this.carList.forEach((item) => (item.checkedList = false));
      } else {
        this.carList.forEach((item) => (item.checkedList = true));
      }
    },
    toBuy() {
      if (this.isPay) {
        this.$toast.show("未选中产品");
      } else {
        // console.log(this.$store.state.carList);
        this.$router.push("/payList");
      }
    },
  },
};
</script>

<style scoped>
.carCount {
  position: relative;
  height: 50px;
  line-height:  50px;
}
</style>