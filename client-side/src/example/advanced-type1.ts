// 高级类型
// 交叉类型
const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
    let res = {} as T & U
    res = Object.assign(arg1, arg2)
    return res
}
mergeFunc({ a: 'a' }, { b: 'b' })
// 联合类型
const getLengthFunc = (content: number | string): number => {
    if (typeof content === 'string') return content.length
    else return content.toString().length

}

const valueList = [123, 'abc']
const getRandomValue = () => {
    const number1 = Math.random() * 10
    if (number1 < 5) { return valueList[0] }
    else return valueList[1]
}

const item = getRandomValue()

if ((item as string).length) {
    console.log((item as string).length)
} else {
    console.log((item as number).toFixed())
}

// 类型保护
class CreatedByClass1 {
    public age = 18
    constructor() { }
}
class CreatedByClass2 {
    public name = 'Rainbow'
    constructor() { }
}
function getRandomItem() {
    return Math.random() < 0.5 ? new CreatedByClass1() : new CreatedByClass2()
}
const item1 = getRandomItem()
if (item1 instanceof CreatedByClass1) {
    console.log(item1.age)
} else {
    console.log(item1.name)
}
// null 和undefined

let values = '123'
// values = undefined
const sumFunc = (x: number, y?: number) => {
    return x + (y || 0)
}

// 类型保护和类型断言
const getLengthFunction = (value: string | null): number => {
    // if (value === null ) { return 0}
    // else { return value.length }
    return (value || '').length
}

function getSplicedStr(num: number | null): string {
    function getRes(prefix: string) {
        return prefix + num?.toFixed().toString()
    }
    num = num || 0.1
    return getRes('Rainbow')
}
console.log(getSplicedStr(3.03))

// 类型别名
type TypeString = string
let str2: TypeString
type PositionType<T> = { x: T, y: T }

const position1: PositionType<number> = {
    x: 1,
    y: -1,
}

const position2: PositionType<string> = {
    x: 'left',
    y: 'top',
}

type Childs<T> = {
    current: T,
    child?: Childs<T>,
}

let ccc: Childs<string> = {
    current: 'first',
    child: {
        current: 'second',
        child: {
            current: 'third',
        }
    }
}
// type Childs = Childs[]
// 字面量类型
type Alias = {
    num: number,
}
interface Interface {
    num: number
}
let _alias: Alias = {
    num: 123,
}
let _interface: Interface = {
    num: 321,
}
_alias = _interface
type Name = 'rainbow'
// const name3: Name = 'hahah'
type Direction = 'north' | 'east' | 'south' | 'west'

function getDirectionFirstLetter(direction: Direction) {
    return direction.substr(0, 1)
}
console.log(getDirectionFirstLetter('north'))

type Age = 18

interface InfoInterfaces {
    name: string,
    age: Age
}
const _info: InfoInterfaces = {
    name: 'rainbow',
    age: 18,
}
// 枚举成员类型
// 可辨识联合
/**
 * 可辨识联合两要素
 */
interface Square {
    kind: 'square',
    size: number,
}
interface Rectangle {
    kind: 'rectangle',
    height: number,
    width: number,
}
interface Circle {
    kind: 'circle',
    radius: number,
}

type Shape = Square | Rectangle | Circle
function asserNerver(value: never): never {
    throw new Error('Unexpected object: ' + value)
}
function getArea(s: Shape) {
    switch (s.kind) {
        case 'square': return s.size * s.size; break;
        case 'rectangle': return s.height * s.width; break;
        case 'circle': return Math.PI * s.radius ** 2; break;
        default:
            return asserNerver(s)
    }
}

    // 完整性检查


