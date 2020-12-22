<template>
  <div class="bottomNav">
    <a-row>
      <a-col :span="4">店铺</a-col>
      <a-col :span="4">收藏</a-col>
      <a-col :span="4">客服</a-col>
      <a-col :span="6">
        <a-button class="car" @click="addCar">加入购物车</a-button>
      </a-col>
      <a-col :span="6">
        <a-button class="buy">购买</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "bottomNavbar",
  methods:{
      addCar(){
        //   console.log("加入购物车")
          this.$emit('addToCar')
      }
  }
};
</script>

<style scoped>
.bottomNav {
  background: #fff;
  position: relative;
  height: 49px;
  text-align: center;
  line-height: 49px;
}
.car{
    background: #ffe817;
    color: #ffffff;
}
.buy{
    background: #f69;
    color: #ffffff;
}
</style>