// ES5 和 ES6 实现创建实例
// 静态方法
// constructor 方法
// 实例属性其他写法
// 类的实例
// 实现私有方法
// 取值函数和存值函数
// calss表达式

// // ES5
// function Point (x, y) {
//     this.x = x;
//     this.y = y;
// }

// Point.prototype.getPostion = function () {
//     return '(' + this.x + ',' + this.y +')'
// }
// var p1 = new Point(2,3)

// console.log(p1)
// console.log(p1.getPostion()) 

// ES6

// class Point {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     getPostion () {
//         return `${this.x}, ${this.y}`
//     }
// }

// let p1 = new Point(3,4)
// console.log(p1)

// var info = {
//     _age: 18,
//     set age (newV) {
//         if (newV > 19) {
//             console.log("您已经老了")
//         } else {
//             console.log("你还小")
//         }
//     },
//     get age (){
//         console.log('管你屁事')
//         return this._age
//     }
// }
// console.log(info.age)
// info.age = 30
// info.age = 10


// class Info {
//     constructor (age) {
//         this._age = age;
//     }
//     set age (newAge) {
//         console.log(`new age is: ${newAge}`)
//         this._age = newAge
//     }
//     get age () {
//         return this._age
//     }
// }

// const I1 = new Info(18)

// const func = function(){}

// function func() {}

// class Person {}

// const infos = class Person{
//     constructor () {}
// }

// const I1 = new infos()

// const infos1 = class {
//     constructor() {}
// }


// 静态方法

// ES5 中的继承
// 类的prototype 属性和
// ES6中类的继承
// __proto__属性
// Object.getPrototypeOf
// supper
    // 作为函数
    // 作为对象

    // ES5 继承
    // function Food () {
    //     this.type = 'food'
    // }

    // Food.prototype.getType = function () {
    //     return this.type
    // }
    // function Vegetables (name) {
    //     this.name = name
    // }

    // Vegetables.prototype = new Food ()
    // const tomato = new Vegetables('tomato')
    // console.log(tomato.getType())


    class Parent {
        constructor(name){
            this.name = name;
        }
        getName () {
            return this.name;
        }
    }

    class Child extends Parent {
        constructor (name, age) {
            super(name)
            this.age = age
        }
    }

    let c = new Child('Rainbow', 25)

    console.log(c)
    console.log(c.getName())
    console.log(c instanceof Child)
    console.log(c instanceof Parent)