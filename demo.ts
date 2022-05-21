// 限制字符串
const a:string='a';
// 限制数字
const b:number=1
// 限制是布林带
const c:boolean=true
// 限制一个数组
const d:number[]=[1,2,3,4,5]
const e:Array<number | boolean | string>=[1,2,3,4,5,6,true,'123']
// 任意值
const f:any=[1,'2',true]
// 函数得限制
const g=(a:string,b:number):string=>{
    return a+b
}
// 元组tuple(只有两项)
const h:[string,number]=['1',2]
console.log(h)
// 枚举
enum color{
    Red=10,
    Green,
    Yellow
}
console.log(color.Red)
console.log(color.Green)
console.log(color[10])