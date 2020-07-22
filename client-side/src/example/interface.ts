// const getFullName = ({ firstName, lastName }:any) => {
//     return `${firstName} ${lastName}`
// }

// getFullName({
//     firstName: 'wenbo',
//     lastName:'qian'
// })

interface NameInfo {
    firstName: string,
    lastName: string,
}

const getFullName = ({firstName,lastName}: NameInfo):string => {
    return `${firstName} ${lastName}`
}

getFullName({
    firstName: 'wenbo',
    lastName: 'qian',
})

// 定义接口
interface Person {
    name: string,   // 必选属性
    age: number,    // 可选属性，表示不是必须的参数，
    job?: string,   // 表示是只读的属性,但是在初始化之后不能重新赋值，否则会报错
    readonly salary: number,    // 任意类型
    [propName: string]:any,
}

// 定义一个变量，它的类型时接口Person，这样就约束了接口的内容
let person: Person = {
    name: 'jack',
    age: 28,
    job: 'IT dog',
    id: 9872,
    salary: 9999,
}

// tslint:disable-next-line:no-shadowed-variable
// function printMan( person: Person) {
//     console.log( `我是 ${person.name}, 我今年 ${person.age},我的工作是${person.job}`);
// }