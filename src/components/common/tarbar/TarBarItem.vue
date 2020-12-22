<template>
     
      <div class="tarbar-title" @click= "itemClick">
          <!-- <div :class="{active:IsActive}">
            <slot name="item_title"></slot>
          </div> -->
          <!-- 动态显示样式 -->
          <div :style="IsActiveColor">
            <slot name="item_title"></slot>
          </div>
      </div>

</template>

<script>
export default {
    name:'TarBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // IsActive:true
        }
    },
    
    // 动态获取IsActive的布尔值
    // (this)为props传递过来的值
    // 判断当前活跃的path是否含有props的path
    computed:{
        IsActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        IsActiveColor(){
            return this.IsActive ? {color: this.activeColor} : {}
        }
    },
    methods:{
        itemClick() {
            // console.log(this.$router.replace(this.path))
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>
.active{
    color: brown;
}

</style>