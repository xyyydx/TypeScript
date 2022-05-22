function func<T>(a,b):T{
    return a+b
}
func<number>(1,2)
func<string>('1','2')

const qew:Array<string|boolean>=['1','2','3',true]
const qwer:number[]=[1,23,2]

interface ObjStyle{
    name:string,
    readonly id:number
    title?:string,
    children:Array<string>
    [props:number]:string
}
const io:ObjStyle={
    name:'123',
    id:12,
    children:[
        
    ],
    title:'1123'
}

interface FuncStyle{
    (a:string,b:string):string
}
const ss:FuncStyle=(a,b)=>{
    return a+b
}
console.log(ss('1','2'))

interface ArrayStyle{
    title?:string,
    sex:'男'|'女'
    // [props:string]:string
}
const arr:ArrayStyle={
    title:'123',
    sex:'男'
}
class fa implements ArrayStyle{
    sex:'男'|'女'
    constructor(){
        this.sex='男'

    }
}
const sfa=new fa()
delete sfa.sex
console.log(sfa)