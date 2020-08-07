//  声明文件
    // 识别已有JS库的类型
        // 全局库
        // 模块化库
        // UMD 库
    // 处理库声明文件
        // 模块插件或UMD插件
        // 修改全局的模块
        // 使用依赖
        // 快捷外部模块声明


        function setTitle (title) {
            document && (document.title = title)
        }

        function getTitle () {
            return document ? document.title : ''
        }

        let documentTitle = getTitle()