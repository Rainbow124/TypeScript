// 类型推论
// 基础
// 多类型联合
// 上下文类型

// 类型兼容性
// 基础
// 函数兼容性
// 参数个数
// 参数类型
// 返回值类型
// 可选参数和剩余参数
// 参数双向协变
// 函数重载
// 枚举
// 类
// 泛型

let name1 = 'Rainbow'
// name = 123

let arr5 = [1, '3'];
// arr5 = [2, 'b', 'c', undefined]
window.onmousedown = (event: any) => {
    console.log(event)
}

interface InfoInterface {
    name: string,
    info: { age: number }
}

let infos: InfoInterface
const infos1 = { name: 'rainbow', info: { age: 18 } }

const infos2 = { age: 18 }

const infos3 = { name: 'lison', age: 18 }

infos = infos1

// 参数个数
let x = (a: number) => 0
let y = (b: number, c: string) => 0

// y = x
// x = y

const arrs = [1, 2, 3]
arrs.forEach((item) => {
    console.log(item)
}) 