<template>
  <TarBar>
     <TarBarItem path="/home" activeColor="blue">
       <!-- 通过具名插槽改变显示的名称 -->
       <div slot="item_title">首页</div>
     </TarBarItem>
     <TarBarItem path="/caregory">
       <div slot="item_title">分类</div>
     </TarBarItem>
     <TarBarItem path="/cart">
       <div slot="item_title">购物车</div>
     </TarBarItem>
     <TarBarItem path="/user">
       <div slot="item_title">账户</div>
     </TarBarItem>
   </TarBar>
</template>

<script>
import TarBar from 'components/common/tarbar/TarBar'
import TarBarItem from 'components/common/tarbar/TarBarItem'

export default {
  name:'MainTabbar',
  components: {
    TarBar,
    TarBarItem
  }
}
</script>

<style>

</style>