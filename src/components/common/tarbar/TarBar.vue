<template>
   <div id="tar-bar">
       <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TarBar'

}
</script>

<style>
#tar-bar{
  display: flex;
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -3px 11px rgba(100,100,100,0.3);
}
.tarbar-title{
  flex: 1;
  height: 49px; 
  /* 默认tarbar高度49px */
  text-align: center;
}
</style>