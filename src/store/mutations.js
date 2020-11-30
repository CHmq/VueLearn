import {ADD_COUNT,ADD_TO_COUNT} from './mutations-type'

export default {
    // addToCar(state, payloads) {
    //     let oldProduct = null;
    //     for (let item of state.carList) {
    //         if (item.iid === payloads.iid) {
    //             oldProduct = item
    //         }
    //     }
    //     let oldProduct = state.carList.find(item => 
    //         item.iid === payloads.iid
    //     )
    // }
    [ADD_COUNT](state, payloads) {
        payloads.count++
    },
    [ADD_TO_COUNT](state, payloads) {
        payloads.checkedList = true
        state.carList.push(payloads)
    },
}