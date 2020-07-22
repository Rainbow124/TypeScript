// const getArray = <T>(value: T, times: number): T[] => {
//     return new Array(times).fill(value)
// }
// console.log(getArray<number>(123, 4).map((item) => item.toFixed()))

// const getArray = <T, U>(param1: T, param2: U, times: number): Array<T> => {
//     return new Array(times).fill([param1, param2])
// }

// getArray<number, string>(1,'a', 3).forEach((item) => {
//     console.log(item[0])
//     console.log(item[1])
// })

// let getArray: <T>(arg: T, times: number) => T[]
// getArray = (arg:any, times:number) => {
//     return new Array (times).fill(arg)
// }

// getArray(123, 3).map((item) => item.length)
// 
// type GetArray = <T>(arg: T, times: number) => T[]

// let getArray: GetArray = (arg: any, times: number) => {
//     return new Array(times).fill(arg)
// }

// interface GetArray<T> {
//     (arg: T, times: number): T[],
//     array: T[]
// }

interface ValueWithLength {
    length: number
}
const getArray = <T extends ValueWithLength>(arg: T, times: number): T[] => {
    return new Array(times).fill(arg)
}
getArray([1, 2], 3)
getArray('123', 3)
getArray({
    length: 2
}, 3)

const getProps = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName]
}

const objs = {
    a: 'a',
    b: 'b',
}

getProps(objs, 'a')
// getProps(objs, 'c')