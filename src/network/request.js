// 封装axios请求实例
import axios from 'axios'

export function request(config) {
        // 创建axios实例
        const instance = axios.create({
            baseURL: 'http://152.136.185.210:8000/api/w6',
            timeout: 5000
        })

        return instance(config)





    // return new Promise((resolve,reject)=>{
    //     // 创建axios实例
    //     const instance = axios.create({
    //         baseURL: 'http://123.207.32.32:8000',
    //         timeout: 5000
    //     })
    //         // 发送网络请求
    //     instance(config)
    //     .then(res => {
    //         resolve(res)
    //     }).catch(err => {
    //         reject(err)
    //     })
    // })
    
    
    // const instance = axios.create({
    //     baseURL: 'http://123.207.32.32:8000',
    //     timeout: 5000
    // })
    // 发送网络请求
    // instance(config.baseConfig)
    // .then(res => {
    //     config.success(res)
    // }).catch(err => {
    //     config.failure(err)
    // })

}