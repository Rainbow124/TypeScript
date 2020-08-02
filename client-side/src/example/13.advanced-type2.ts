// 高级类型2
    // this 类型
    class Counters {
        constructor(public count: number = 0) {}
        public add (value: number) {
            this.count += value;
            return this
        }

        public subtract (value: number) {
            this.count -= value;
            return this
        }
    }
    let counter1 = new Counters(10)
    // console.log(counter1.add(2).subtract(5))

    class PowCounter extends Counters{
        constructor(public count: number = 0) {
            super(count)
        }
        public pow(value: number){
            this.count = this.count ** value
            return this
        }
    }
    let powCounter = new PowCounter(2)
    console.log(powCounter.pow(4))

    // 索引类型
        // 索引类型查询操作符

        // keyof
        interface InfoInterfaceAdvanced {
            name: string,
            age: number,
        }

        let infoProp: keyof InfoInterfaceAdvanced
        infoProp = 'name'
        infoProp = 'age'
        // infoProp = 'sex'

        function getValue <T,K extends keyof T>(obj: T, names: K[]): T[K][]{
            return names.map((n) => obj[n])
        }

        const infoObj = {
            name: 'lison',
            age: 18,
        }
        let infoValues: (string | number)[] = getValue(infoObj, ['name', 'age'])
        console.log(infoValues)
        // 索引访问操作符
        type NameTypes = InfoInterfaceAdvanced['name']
        function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
            return o[name]
        }

        interface Objs<T> {
            [key: string]: T
        }

        const objs1: Objs<number> = {
            age: 18,
        }
        let keys: Objs<number>['name']

        interface Type {
            a: never,
            b: never,
            c: string,
            d: number,
            e: undefined,
            f: null,
            g: object
        }

        type Test = Type[keyof Type]
    // 映射类型
        // 基础
        interface Info1 {
            age: number,
            name: string,
            sex: string,
        }
        // interface ReadonlyType {
        //     readonly age: number
        // }
        type ReadonlyType<T> = {
            readonly [P in keyof T]?: T[P]
        }
        type ReadonlyInfo1 = ReadonlyType<Info1>
        let info11: ReadonlyInfo1 = {
            age: 18,
            name: 'Rainbow',
            sex: 'man',
        }
        // info11.age = 20

        // Readonly Partial
        // Pick Record

        // type Pick<T, K extends keyof T> = {
        //     [P in K]: T;
        // }
        interface Info2 {
            name: string,
            age: number,
            address: string,
        }

        const info5: Info2 = {
            name: 'Rainbow',
            age: 24,
            address: 'beijing',
        }

        // tslint:disable-next-line:no-shadowed-variable
        function  pick <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
            const res: any  = {}
            keys.map((key) => {
                res[key] = obj[key]
            })
            return res
        }
        const nameAndAddress = pick (info5, ['name', 'address'])
        // 由映射类型进行推断
        // 增加或者一处特定修饰符
        // keyof 和映射类型在 2.9 的升级
        // 元组和数组上的映射类型

        // unknown
        // [1] 任何类型都可以赋值给unknown类型
        // [2]  如果没有类型断言或给予控制流的类型细化时，unknown 不可以赋值非其他类型，此时他只能赋值给unknown 或者 any类型

        // [3]  如果没有类型断言或给予控制流的类型细化时，不能在他上面进行任何操作
        // [4]  unknown 与人格其他类型组成的交叉类型，最后都等于其他类型
        type type1 = string & unknown
        type type2 = number & unknown
        type type3 = unknown & unknown
        type type4 = unknown & string[]
        // [5] unknown 与任何其他类型（除了any 是 any）组成的联合类型，都等于 unknown
        // [6] never 是 unknown的子类型
        // [7] keyof unknown 等于类型 never
        // [8] 只能对 unknown 进行等或不等操作， 不能进行其他操作
            // value1 === value2
            // value1 !== value2
            // value1 += value2
        // [9] unknown 类型的值不能访问他的属性、作为函数调用和作为类创建实例
        let value10: unknown
        // value10.age
        // [10] 使用映射类型时如果遍历的是 unknown类型，则不会映射任何属性

    // 条件类型
        // 基础
        // T extends U ? X:Y

        // 分布式条件类型
        // 条件类型的类型推断-infer
        // TS预定义条件类型