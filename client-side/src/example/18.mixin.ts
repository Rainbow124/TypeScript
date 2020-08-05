// 混入
// 对象的混入
interface ObjectA {
    a: string,
}
interface ObjectB {
    b: string,
}

let Aa: ObjectA = {
    a: 'a'
}
let Bb: ObjectB = {
    b: 'b'
}
let AB: ObjectA & ObjectB = Object.assign(Aa, Bb)
console.log(AB)
    // 类的混入
