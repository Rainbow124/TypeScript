// 高级类型
    // 交叉类型
    const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
        let res = {} as T & U
        res = Object.assign(arg1, arg2)
        return res
    }
    mergeFunc({a: 'a'}, {b: 'b'})
    // 联合类型
    const getLengthFunc = (content: number | string):number => {
        if (typeof content === 'string') return content.length
        else return content.toString().length

    }

    const valueList = [123, 'abc']
    const getRandomValue = () => {
        const number1 = Math.random() * 10
        if (number1 < 5 ) {return valueList[0]}
        else return valueList[1]
    }

    const item = getRandomValue()

    if((item as string).length)  {
        console.log((item as string).length)
    } else {
        console.log((item as number).toFixed())
    }
    // 类型保护
    // null 和undefined
    // 类型保护和类型断言
    // 类型别名
    // 字面量类型
    // 枚举成员类型
    // 可辨识联合

