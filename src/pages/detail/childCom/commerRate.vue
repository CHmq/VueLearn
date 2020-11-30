<template>
  <div class="commerRate" v-if="Object.keys(commerInfo).length !== 0">
    <div class="commerInfo">
      <img :src="commerInfo.user.avatar" alt />
      <h3>{{commerInfo.user.uname}}</h3>
    </div>
    <p>{{commerInfo.content}}</p>
    <p>
      {{commerInfo.created|showDate}}
      <span>{{commerInfo.style}}</span>
    </p>
    <div class="commerImg" :span="4" v-for="item in commerInfo.images" :key="item.index">
      <img :src="item" />
    </div>
  </div>
</template>

<script>
import { formatData } from "../../../common/utils";
export default {
  name: "commerRate",
  props: {
    commerInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      // 将时间戳转换成date对象
      const date = new Date(value * 1000);
      // 将date对象格式化
      return formatData(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
.commerRate {
  background: #ffffff;
  margin: 10px 0;
  padding: 10px;
}
.commerInfo img {
  width: 30px;
  border-radius: 50px;
  margin-right: 15px;
  box-shadow: 1px 1px 5px #00000057;
  display: inline-block;
}
.commerInfo h3 {
  display: inline-block;
}
.commerImg {
  padding: 5px;
  border: 1px solid #ccc;
  display: inline-block;
}
.commerImg img {
  width: 70px;
  height: 70px;
}
</style>