// TS 中的类
// 基础
// 修饰符
// readonly 修饰符
// 参数属性
// 静态属性
// 可选类属性
// 存取器
// 抽象类
// 实例类型
// 对前面跳过知识的补充

class Point {
    x: number
    y: number
    constructor (x:number,y:number) {
        this.x = x
        this.y = y
    }
    getPosition () {
        return `(${this.x}, ${this.y})`
    }
}
const point = new Point (1,2)
// console.log(point)

class Parent {
    name: string
    constructor (name:string) {
        this.name = name
    }
}
class Child extends Parent {
    constructor (name:string) {
        super(name)
    }
}