<template>
  <div class="home">
    <!-- <h3>我是home页面导航</h3> -->
    <Navbar>
      <div slot="center">购物街</div>
    </Navbar>
    <TabContol
      :titles="['精选','流行','爆款']"
      :num="8"
      @goodsClick="goodsClick"
      ref="TabContolLoad1"
      v-show="isTabFixed"
    />
    <Scorll
      class="homeContent"
      ref="scorll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <a-carousel>
        <div v-for="item in banners" :key="item.index">
          <a :href="item.link">
            <img :src="item.image" alt @load="bannerLoad" />
          </a>
        </div>
      </a-carousel>
      <RemmondView :recomments="recomments" />
      <FeatureView />
      <!-- <TabContol class="tab-contol" :titles="['精选','流行','爆款']" @goodsClick="goodsClick" /> -->
      <TabContol :titles="['精选','流行','爆款']" :num="8" @goodsClick="goodsClick" ref="TabContolLoad2" />
      <GoodsLIst :goodsItems="goods[currentType].list" />
    </Scorll>
    <BackTop @click.native="backToTop" v-show="isShow" />
  </div>
</template>

<script>
import { backTopMixin } from "../../common/mixin";

import { getHomeMultidate, getHomeData } from "network/home";
import RemmondView from "./RemmondView";
import FeatureView from "./featureView";

import Navbar from "components/common/navbar/NavBar";
import TabContol from "components/content/tabContol";
import GoodsLIst from "components/content/goodsLIst";
import Scorll from "components/content/scroll";

export default {
  name: "Home",
  components: {
    RemmondView,
    FeatureView,
    TabContol,
    GoodsLIst,
    Scorll,
    Navbar
  },
  mixins: [backTopMixin],
  data() {
    return {
      banners: [], //轮播图片
      recomments: [], //热门分类
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }, //产品列表
      currentType: "pop", //默认请求类型
      // isShow: false, //返回顶部按钮
      isTabLoad: 0, //产品分类高度
      isLoad: false, //轮播加载完成
      isTabFixed: false, //吸顶显示
      saveY: 0 //记录离开位置
    };
  },
  methods: {
    // 事件处理
    //产品分类显示
    goodsClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;

        case 1:
          this.currentType = "new";
          break;

        case 2:
          this.currentType = "sell";
      }
      this.$refs.TabContolLoad1.currentIndex = index;
      this.$refs.TabContolLoad2.currentIndex = index;
    },
    // 返回顶部
    // backToTop() {
    //   // console.log(this.$refs.scorll)
    //   this.$refs.scorll.scrollTo(0, 0);
    // },
    // 屏幕超出高度显示按钮
    contentScroll(position) {
      this.listenToBackTop(position);

      // this.isShow = -position.y > 1000;
      this.isTabFixed = -position.y > this.isTabLoad;
    },
    // 加载下一页数据
    loadMore() {
      this.getHomeData(this.currentType);
      // this.$refs.scorll.scroll.refresh();
    },
    // 加载完成获取产品分类高度
    bannerLoad() {
      if (!this.isLoad) {
        // console.log(this.$refs.TabContolLoad.$el.offsetTop)
        this.isTabLoad = this.$refs.TabContolLoad2.$el.offsetTop;
        this.isLoad = true;
      }
    },

    // 网络请求
    // 导航图
    getHomeMultidate() {
      getHomeMultidate().then(res => {
        const {
          data: { data }
        } = res;
        this.banners = data.banner.list;
        this.recomments = data.recommend.list;
      });
    },

    // 产品列表
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then(res => {
        const {
          data: { data }
        } = res;
        this.goods[type].list.push(...data.list);
        this.goods[type].page += 1;

        this.$refs.scorll.refresh();

        // 使BScroll记载事件可重复
        this.$refs.scorll.scroll.finishPullUp();
      });
    }
  },

  created() {
    this.getHomeMultidate();
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  // 进入调用
  activated() {
    this.$refs.scorll.scrollTo(0, this.saveY, 0);
    this.$refs.scorll.refresh();
  },
  // 离开调用
  deactivated() {
    // console.log(this.$refs.scorll.scorllY)
    this.saveY = this.$refs.scorll.scorllY;
  }
};
</script>

<style scoped>
.home {
  /* position: relative; */
  height: 100vh;
}
.ant-carousel .slick-slide {
  text-align: center;
  height: 160px;
  overflow: hidden;
}

.ant-carousel .slick-slide img {
  width: 100%;
}
/* .tab-contol {
  position: sticky !important;
  top: 44px;
  z-index: 10;
} */
.homeContent {
  height: 600px;
  overflow: hidden;
  /* width: 100%; */
}
</style>