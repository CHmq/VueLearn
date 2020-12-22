<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },

    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // console.log(this.$refs.wrapper);
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    });
    this.scroll.scrollTo(0, 0);

    // 监听滚动位置
    this.scroll.on("scroll", position => {
      //   console.log(position);
      this.$emit("scroll", position);
    });

    // 监听上拉加载
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh(){
      this.scroll && this.scroll.refresh();
    },
    scorllY(){
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script scoped>

<style>
</style>