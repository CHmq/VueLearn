import { ADD_COUNT, ADD_TO_COUNT, SUBTRACT_COUNT } from './mutations-type'


export default {
    addToCar(context, payloads) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.carList.find(item =>
                item.iid === payloads.iid
            )

            if (oldProduct) {
                context.commit(ADD_COUNT, oldProduct)
                resolve("产品加一")
                // oldProduct.count += 1
            } else {
                payloads.count = 1
                // context.state.carList.push(payloads)
                context.commit(ADD_TO_COUNT, payloads)
                resolve("产品添加成功")
            }
        })
    },
    changeCarNum(context, payloads) {
        return new Promise((resolve, reject) => {
            let oldCarNum = context.state.carList.find(item =>
                item.iid === payloads.iid
            )

            if (payloads.num > 0) {
                context.commit(ADD_COUNT, oldCarNum)
            } else {
                if (oldCarNum.count === 1) {
                    resolve("是否要删除该产品")
                }
                context.commit(SUBTRACT_COUNT, oldCarNum)
            }
        })
    }
}
