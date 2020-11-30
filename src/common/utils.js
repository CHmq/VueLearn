// 事件防抖
export function debounce(func, delay) {
  let timer = null

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}


// 时间戳转换
export function formatData(date, fmt) {
  // 判断输入时间戳年份的个数并输出对应的格式
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeeftZero(str));
    }
  }
  return fmt
}

function padLeeftZero(str) {
  return ('00' + str).substr(str.length)
}