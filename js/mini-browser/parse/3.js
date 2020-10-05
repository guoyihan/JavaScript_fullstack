// 解析html
let response = `
<html>
    <head></head>
    <body>
        <div></div>
    </body>
</html>
`
// 解析成DOM树
// 分词(词法分析)FSM(有限状态机) -> 语法分析(LRR) -> AST(抽象语法树)(DOM树)
// 拿出标签名(开始 结束)
let currentToken = null
function data(c) {
    if (c === '<') {
        return tagOpen
    }
    return data
}
function tagOpen(c) {
    if (c === '/') {
        currentToken = {
            type: 'endTag',
            tagName: ''
        }
        return tagName

    } else {
        currentToken = {
            type: 'startTag',
            tagName: c
        }
        return tagName

    }
    
}
function tagName(c) {
    if (c.match(/[a-z]/)) {
        currentToken.tagName += c
        return tagName
    } else if ( c === '>') {
        console.log(currentToken) 
        return data
    }
    
}
function parseDom(html) {
    let state = data
    for ( let c of html) {
        state = state(c)
    }
}
parseDom(response)