<template>
  <div class="detail">
    <DetailNavbar ref="nav" @titleClick="titleClick" />
    <Scorll
      :probe-type="3"
      :pull-up-load="true"
      class="delContent"
      ref="scorll"
      @scroll="detailScroll"
    >
      <a-carousel class="detCaouselr">
        <div v-for="item in topImages" :key="item.index">
          <img :src="item" alt @loaded="loaded" />
        </div>
      </a-carousel>
      <DetailGoods :goods="goods" />
      <DetailShop :shop="shop" />
      <DetailImage :detailInfo="detailInfo" @loaded="loaded" />
      <table ref="detailTable">
        <tr v-for="item in itemParams" :key="item.index">
          <td>{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
      <CommerRate ref="detailCommer" :commerInfo="commerInfo" />
      <GoodsLIst ref="detailGoods" :goodsItems="recommend" @loaded="loaded" />
    </Scorll>
    <BackTop @click.native="backToTop" v-show="isShow" />
    <BottomNavbar @addToCar="addCar"/>
    <!-- <Toast message="哈哈哈"/> -->
  </div>
</template>

<script>
import { debounce } from "../../common/utils";
import { backTopMixin } from "../../common/mixin";

import Scorll from "components/content/scroll";
import GoodsLIst from "components/content/goodsLIst";

import DetailNavbar from "./childCom/detailNavbar";
import DetailGoods from "./childCom/detailGoods";
import DetailShop from "./childCom/detailShop";
import DetailImage from "./childCom/detailImage";
import CommerRate from "./childCom/commerRate";
import BottomNavbar from "./childCom/bottomNavbar";

import {mapActions} from 'vuex'

// import Toast from 'components/common/toast/toast'


import {
  getDetailMultidate,
  getRecommend,
  goodsItem,
  shopItem
} from "network/detail";

export default {
  name: "detail",
  components: {
    Scorll,
    DetailNavbar,
    DetailGoods,
    DetailShop,
    DetailImage,
    CommerRate,
    GoodsLIst,
    BottomNavbar,
    // Toast
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null, //商品请求id
      topImages: [], //商品轮播图片
      goods: {}, //重新整理商品数据
      shop: {}, //重新整理商家数据
      detailInfo: {}, //重新整理商品效果
      itemParams: [], //重新整理商品参数
      commerInfo: {}, //重新整理评论信息
      recommend: [], //推荐商品数据
      setTop: [], //回滚顶部距离
      getThemeTopY: null, //防抖回调获取组件位置
      currentIndex: 0, //默认当前底部菜单显示点击位置
      isloaded: null //DetailImage防抖回调
    };
  },
  methods: {
    ...mapActions(['addToCar']),
    loaded() {
      this.itemImgListen()

      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scorll.scrollTo(0, -this.setTop[index]);
    },
    detailScroll(position) {
      const positionY = -position.y;
      let length = this.setTop.length;
      //   判断滚动位置改变varbar的currentIndex
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          i < length - 1 &&
          positionY > this.setTop[i] &&
          positionY < this.setTop[i + 1]
        ) {
          this.currentIndex = i;
          //   console.log(this.currentIndex);
          this.$refs.nav.$refs.detailnav.currentIndex = this.currentIndex;
        }
      }
      this.listenToBackTop(position);
      // this.isShow = positionY > 1000;
      //   for (let i = 0; i < length; i++) {
      //     if (
      //       this.currentIndex !== i &&
      //       ((i < length - 1 &&
      //         positionY > this.setTop[i] &&
      //         positionY < this.setTop[i + 1]) ||
      //         (i < length - 1 && positionY >= this.setTop[i]))
      //     ) {
      //       this.currentIndex = i;
      //       console.log(this.currentIndex);
      //     }
      //   }
    },
    addCar(){
      // console.log('111')
      const product = {}
      product.image = this.topImages[0]
      product.desc = this.goods.desc
      product.title = this.goods.title
      product.price = this.goods.newPrice
      product.iid = this.iid
      // console.log(product)

    // 调用vuex mutations中方法
      // this.$store.commit('addToCar', product)
      // 调用vuex actions 中方法
      // this.$store.dispatch('addToCar', product).then(res=>{
      //   console.log(res)
      // })
      this.addToCar(product).then(res=>{
        // console.log(res)
        this.$toast.show(res,1000)
      })
    }
  },
  created() {
    //   console.log(this.$route.params.iid)
    this.iid = this.$route.params.iid;

    getDetailMultidate(this.iid).then(res => {
      // console.log(res)
      const {
        data: { result }
      } = res;
        // console.log(result);
      //  导航图片
      this.topImages = result.itemInfo.topImages;
      //   商品信息
      this.goods = new goodsItem(
        result.itemInfo,
        result.columns,
        result.shopInfo
      );
      // 店铺信息
      this.shop = new shopItem(result.shopInfo);
      //产品效果
      this.detailInfo = result.detailInfo;
      //参数信息
      this.itemParams = result.itemParams.info.set;

      //评论信息
      if (result.rate.cRate !== 0) {
        this.commerInfo = result.rate.list[0];
      }
    });

    getRecommend().then(res => {
      const {
        data: {
          data: { list }
        }
      } = res;
      // console.log(list)

      this.recommend = list;
    });

    this.getThemeTopY = debounce(() => {
      this.setTop = [];

      this.setTop.push(0);
      //   console.log(this.$refs.detailTable.offsetTop);
      this.setTop.push(this.$refs.detailTable.offsetTop);
      this.setTop.push(this.$refs.detailCommer.$el.offsetTop);
      this.setTop.push(this.$refs.detailGoods.$el.offsetTop);
      //   Number.MAX_VALUE获取js的一个最大值
      this.setTop.push(Number.MAX_VALUE);
    }, 200);

    // nextTick为渲染结束后的下一帧，但是图篇可能仍未加载完成
    //   this.$nextTick(() => {
    // this.setTop = [];

    // this.setTop.push(0);
    // this.setTop.push(this.$refs.detailTable.$el.offsetTop);
    // this.setTop.push(this.$refs.detailCommer.$el.offsetTop);
    // this.setTop.push(this.$refs.detailGoods.$el.offsetTop);
    // console.log(this.setTop);
    //   });
  }
};
</script>

<style scoped>
.detail {
  height: 100vh;
  background: #eee;
  position: relative;
  z-index: 10;
}
.delContent {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.detCaouselr {
  margin-top: 2px !important;
  height: 400px;
  min-height: 400px;
  overflow: hidden;
}
.detCaouselr .slick-slide img {
  width: 100%;
}
</style>