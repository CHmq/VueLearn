<template>
  <a-row class="cartProduct">
    <a-col :span="3">
      <a-checkbox
        @change="onChange"
        :defaultChecked="product.checkedList"
        :checked="product.checkedList"
      />
    </a-col>
    <a-col :span="6" class="productImg">
      <img :src="product.image" alt />
    </a-col>
    <a-col :span="15" class="productInfo">
      <h3 class="productTitle">{{product.title}}</h3>
      <p class="productDce">{{product.desc}}</p>
      <div>
        <h4 class="productPrice">￥{{product.price}}</h4>
        <h4 class="productCount">
          <a-button type="primary" class="countBtn" @click="changeNum(product.iid,1)">+</a-button>
          <span>x{{product.count}}</span>
          <a-button
            type="primary"
            class="countBtn"
            @click="changeNum(product.iid,-1)"
            :disabled="product.count===1"
          >-</a-button>
        </h4>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Cartproduce",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      checkedList: true,
    };
  },
  methods: {
    ...mapActions(["changeCarNum"]),
    onChange(e) {
      // console.log(e);
      this.$store.state.carList.find(
        (item) => item.iid === this.product.iid
      ).checkedList = e.target.checked;
    },
    changeNum(id, num) {
      const product = {};
      (product.iid = id), (product.num = num);
      
      this.changeCarNum(product).then((res) => {
        this.$toast.show(res, 1000);
      });
    },
  },
};
</script>

<style scoped>
.cartProduct {
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
.countBtn {
  padding: 0 8px;
  margin: 0 5px;
}
</style>