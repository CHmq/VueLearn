<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "toast",
//   props: {
//     message: {
//       type: String,
//       default: ""
//     }
//   },
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    show(res, timer=1000) {
        // console.log("object")
      this.message = res;
      this.isShow = true;

      setTimeout(() => {
        this.message = '';
        this.isShow = false;
      }, timer);
    }
  }
};
</script>

<style scoped>
.toast {
  background: rgba(0, 0, 0, 0.65);
  position: fixed;
  z-index: 90;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 20px;
}
</style>