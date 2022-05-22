class Person{
    // 公共属性 谁都可以访问(可以访问)
    public name:string
    // 保护属性 (只有在自己和子类的实例里面获取这个属性,在示例外不行)
    protected age:number
    // 私有属性 (只有在自己的实力里面获得这个属性,子类会继承到但是不能够修改,在实例外获取不到)
    private money:number
    constructor(name:string,age:number,money:number){
        this.name=name
        this.age=age
        this.money=money
    }
}

class Son extends Person{
    // 只读属性 可以在实例外读取到但不能在实例外面修改
    readonly sex:string
    // name继承成了Person的name 所以Son里就有name:'111'
    constructor(name:string,age:number,sex:"男"|"女",money:number){
        super(name,age,money)
        this.sex=sex
        this.age=age
        this.sex='男'
    }
}

const s=new Son('111',12,"男",1000)
console.log(s)
// console.log(s.age) 报错