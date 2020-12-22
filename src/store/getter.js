// 计算属性
export default {
    carLength(state) {
        return state.carList.length
    },
    carList(state) {
        return state.carList
    },
    payList(state) {
        return state.carList.filter(item=>item.checkedList===true)
    }
}