// 中间层分发
import {request} from './request'

export function getHomeMultidate(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeData(type,page){
    return request({
        url:'/home/data',
       params:{
        type,
        page
       }
    })
}