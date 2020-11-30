<template>
  <div>
    <Navbar>
      <!-- <div slot="center">购物车({{carLength}})</div> -->
      <div slot="center">购物车({{length}})</div>
    </Navbar>
    <Cartlist/>
    <CarCount />

  </div>
</template>

<script>
import Navbar from "components/common/navbar/NavBar";

import Cartlist from './children/cartlist';
import CarCount from "./children/carCount";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    Navbar,
    Cartlist,
    CarCount
  },
  computed: {
    // carLength(){
    //   return this.$store.getters.carLength
    // }
    ...mapGetters(["carLength"]),
    ...mapGetters({
      length: "carLength"
    })
  }
};
</script>

<style>
</style>