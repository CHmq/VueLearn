// 中间层分发
import {request} from './request'

export function getDetailMultidate(iid){
    return request({
        url:'/detail',
        params:{iid}
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}


// 数据整合一个对象
export class goodsItem {
 constructor(itemInfo, columns, services){
     this.title = itemInfo.title
     this.discountBgColor = itemInfo.discountBgColor
     this.discountDesc = itemInfo.discountDesc     
     this.newPrice = itemInfo.lowNowPrice
     this.desc = itemInfo.desc
     this.price = itemInfo.price
     this.oldPrice = itemInfo.oldPrice
     this.columns = columns
     this.services = services.services
 }
}

export class shopItem {
    constructor(shopItem){
        this.name = shopItem.name
        this.shopLogo = shopItem.shopLogo
        this.cGoods = shopItem.cGoods
        this.cSells = shopItem.cSells
        this.score = shopItem.score
    }
   }

// const g = new goodsItem()

