<template>
  <div>
    <Navbar>
      <div slot="left">
        <a-button @click="backHome" type="primary"><</a-button>
      </div>
      <div slot="center">
        <TabContol :titles="['商品','参数','评论','推荐']" :num="6" 
        @goodsClick="detailClick" ref="detailnav"></TabContol>
      </div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/NavBar";
import TabContol from "components/content/tabContol";

export default {
  name: "detailNavbar",
  components: {
    Navbar,
    TabContol
  },
  methods: {
    detailClick(index) {
      // console.log(index)
      this.$emit('titleClick',index)
    },
    backHome() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>