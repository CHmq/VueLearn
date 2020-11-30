<template>
  <div class="detailgoods" v-if="Object.keys(goods).length!==0">
    <div>
      <h2>{{goods.title}}</h2>
    </div>
    <div>
      <span class="price">{{goods.price}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount"
        :style="{background:goods.discountBgColor?goods.discountBgColor:''}"
      >{{goods.discountDesc}}</span>
    </div>
    <a-row class="columns">
      <a-col :span="8">{{goods.columns[0]}}</a-col>
      <a-col :span="8">{{goods.columns[1]}}</a-col>
      <a-col :span="8">{{goods.services[goods.services.length -1].name}}</a-col>
    </a-row>
    <a-divider class="divider"/>
    <a-row>
      <a-col class="services" :span="8" v-for="index in goods.services.length -1" :key="index">
        <img :src="goods.services[index-1].icon" />
        <span>{{goods.services[index-1].name}}</span>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "detailGoods",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.detailgoods {
  padding: 10px;
  background: #ffffff;
}
.price {
    font-size: 30px;
    color: crimson;
    font-weight: bolder;
    margin-right: 10px;
}
.oldPrice{
    font-size: 18px;
    text-decoration:line-through;    
    margin-right: 10px;
}
.discount{
    padding: 4px 10px;
    border-radius: 20px;
    color: #fff;    
    position: relative;
    top: -12px;
}
.columns{
    margin-top: 10px;
}
.divider{
    margin: 15px 0;
}
.services img{
    width: 15px;
}
</style>