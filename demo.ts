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
const f:any=[1,'2',true];
// null和undefined
let dream:number=null
// 函数得限制
const g=(a:string,b:number):string=>{
    return a+b
}
// 元组tuple(只有两项)
const h:[string,number]=['1',2]
console.log(h)
// 枚举
enum color{
    Monday=10, //color[Monday]=10 color[10]=Monday
    Tuesday,   //color[Tuesday]=11 color[11]=Tuesday
    Wednesday,
    Thursday,
    Friday=-1,  //-1
    Saturday,   //0
    weekday
    // console.log(color[1]) weekday
}
// 枚举初始值是0 如果中途有赋值从赋值开始
enum color1{
    Monday, //color[Monday]=0 color[0]=Monday
    Tuesday=10,   //color[Tuesday]=10 color[10]=Tuesday
    Wednesday,  //color[Wednesday]=11 color[11]=Wednesday
    Thursday,
    Friday,
    Saturday,
    weekday
}
// 如果有重复得在赋值的后面两边才会想等
enum color2{
    Monday, //0     color[0]==='Monday  false
    Tuesday,   //1    false
    Wednesday,  //2    false
    Thursday,  //3      false
    Friday=0,  //0      true
    Saturday,  //1      true
    weekday    //2      true
    // console.log(color2[1]==='Tuesday')false
}
// 每个成员都必须有都要有值
enum color3{
    a='1',
    b='1'
}
// void
function add():void{
    16+1
}