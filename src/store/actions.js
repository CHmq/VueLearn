import {ADD_COUNT,ADD_TO_COUNT} from './mutations-type'


export default {
    addToCar(context, payloads) {
        return new Promise((resolve,reject)=>{
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
    }
}