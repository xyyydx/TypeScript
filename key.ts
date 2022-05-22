function func<T>(a,b):T{
    return a+b
}
func<number>(1,2)
func<string>('1','2')

const qew:Array<string|boolean>=['1','2','3',true]
const qwer:number[]=[1,23,2]

const qwew=Symbol(21)
console.log(qwew)

type EmptyObject={
    [k in keyof any]:never
}
const sakldjf:EmptyObject={}
const m:EmptyObject=['height']
extends