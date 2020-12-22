<template>
  <a-row>
    <div v-for="item in recomments" :key="item.index" class="recomment">
      <a :href="item.link">
        <a-col :span="6">
          <img :src="item.image" alt />
          <span>{{item.title}}</span>
        </a-col>
      </a>
    </div>
  </a-row>
</template>

<script>
export default {
  name: "RemmondView",
  props: {
    recomments: {
      type: Array
    }
  }
};
</script>

<style>
.recomment{
    text-align: center;
}
.recomment .ant-col-6{
    padding: 10px;
}
.recomment img{
    width: 100%;
    margin-bottom: 8px;
}
.recomment a{
    color:#333
}


</style>