let add: (x:number, y:number) =>  number
add = (arg1: number, arg2: number):number => arg1 + arg2
add = (arg1: number, arg2: number) => arg1 + arg2

// interface add  {
//     x:number,
//     y:number
// }

type Add = (x: number, y: number) => number
let addFunc
addFunc = (arg1: number, arg2: number) => arg1 + arg2

// function handleData () {
//     if (arguments.length === 1) return arguments[0] * 2
//     else if (arguments.length === 2) return arguments[0] * arguments[1]
//     else return Array.prototype.slice.apply(arguments).join('_')
// }

const handleData2 = (...args:number[]) => {
    // console.log(args)
}

// 函数

// # 函数类型
// - 为函数定义类型
// - 完整的函数类型
// - 使用接口定义函数类型

// 接口中函数的定义
type Student = (x: string, y: number) => string
// - 使用类型别名

// 声明函数方式的理解：
// let student:(x:string, y:number) => string = function(name:string, age: number):string{}
//  声明变量         指定函数类型                   根据执行函数类型定义函数

// # 参数
// - 可选参数
// - 默认参数
// - 剩余参数



// # 重载