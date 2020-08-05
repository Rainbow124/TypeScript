//  装饰器
// 基础
// 装饰器定义
function setName() {
    console.log('get setName')
    return (target: any) => {
        console.log('setname')
    }
}

function setAge() {
    console.log('get setAge')
    return (target: any) => {
        console.log('setAge')
    }
}
@setName()
@setAge()
class ClassDec {
    constructor() {

    }
}
        // 装饰器工厂
        // 装饰器组合
        // 装饰器求值
    // 类装饰器
    // 方法装饰器
    // 访问器装饰器
    // 属性装饰器
    // 参数装饰器