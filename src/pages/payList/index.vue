<template>
  <div>
    <Navbar>
      <div slot="center">支付页面</div>
    </Navbar>
    <Paylist />
    <PayCount />
  </div>
</template>

<script>
import Navbar from "components/common/navbar/NavBar";
import Paylist from "./children/paylist";
import PayCount from "./children/payCount";

export default {
  name: "PayList",
  components: {
    Navbar,
    Paylist,
    PayCount,
  },
};
</script>

<style>
</style>