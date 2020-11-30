import Toast from './toast.vue'

const obj = {}

obj.install = function (vue) {
    // 创建一个构造器
    const toastContrustor = vue.extend(Toast)

    const toastNew = new toastContrustor
    // 手动挂载在某个div上面
    toastNew.$mount(document.createElement('div'))

    document.body.appendChild(toastNew.$el)

    vue.prototype.$toast = toastNew


}

export default obj