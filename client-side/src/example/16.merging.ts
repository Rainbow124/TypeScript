//  16. 声明合并
    // 补充知识

    interface InfoInter {
        name: string
        getRes(input: string): number
    }
    interface InfoInter {
        age: number
        getRes(input: number): string
    }

    let infoInter: InfoInter
    infoInter = {
        name: 'Rainbow',
        age: 19,
        getRes(text: any): any {
            if (typeof text === 'string') { return text.length }
            else { return String (text)}
        }
    }
    // 合并接口
    // 合并命名空间
    // 不同类型合并
        // 命名空间和函数
        // 命名空间和枚举