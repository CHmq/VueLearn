<template>
  <div class="var-bar">
    <div class="left">
      <slot name="left"/>
    </div>
    <div class="center">
      <slot name="center"/>
    </div>
    <div class="right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
.var-bar{
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    background: #f69;
    color: #fff
;
}
.left,.right{
    width: 60px;
}
.center{
    flex: 1;
}

</style>