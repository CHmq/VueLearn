<template>
  <div class="detailShop" v-if="Object.keys(shop).length!==0">
    <div class="shopmessage">
      <img :src="shop.shopLogo" />
      <h2>{{shop.name}}</h2>
    </div>
    <a-row>
      <a-col :span="5">
        <h3>{{shop.cSells | sellCountFilter}}</h3>
        <span>总销量</span>
      </a-col>
      <a-col :span="5">
        <h3>{{shop.cGoods}}</h3>
        <span>全部宝贝</span>
      </a-col>
      <a-col :span="2">
        <a-divider type="vertical" class="shopDivider" />
      </a-col>
      <a-col :span="12">
        <div v-for="item in shop.score" :key="item.index">
          <h5 class="shopScore">
            <span>{{item.name}}</span>
            <span class="score" :class="item.isBetter?'scoreG':'scoreR'">{{item.score}}</span>
            <span
              :class="item.isBetter?'scorebtnG':'scorebtnR'"
            >{{item.isBetter?'高':'低'}}</span>
          </h5>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "detailShop",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  // 筛选器将数量超过10000变成1万
  filters: {
    sellCountFilter(value) {
      let count = value;
      if (value > 10000) {
        count = (count / 10000).toFixed(1) + "万";
      }
      return count;
    }
  }
};
</script>

<style scoped>
.detailShop {
  margin: 10px 0;
  padding: 10px;
  background: #ffffff;
}
.shopmessage {
  margin-bottom: 15px;
}
.shopmessage img {
  width: 60px;
  border-radius: 50px;
  margin-right: 15px;
  box-shadow: 1px 1px 5px #00000057;
  display: inline-block;
}
.shopmessage h2 {
  display: inline-block;
}
.shopDivider {
  height: 3em;
  width: 2px;
}
.shopScore span {
  margin: 0 10px;
}
.shopScore .score {
  min-width: 30px;
  display: inline-block;
}
.scorebtnG{
  background: #0f0;
  color: #ffffff;
  padding: 2px;
}
.scorebtnR{
  background: #f00;
  color: #ffffff;
  padding: 2px; 
}
.scoreG {
  color: #0f0;
}
.scoreR {
  color: #f00;
}
</style>>