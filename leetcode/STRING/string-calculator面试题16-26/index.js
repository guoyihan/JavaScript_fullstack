var calculate = function(s) {
    //先去空格
    s = s.replace(/ /g,'');
    let numStr = '', lastSymbol = '', numStack = [];
    for(let i = 0; i <= s.length; i++){
        if(/[\+\-\*\/]/.test(s[i]) || i == s.length){
            switch(lastSymbol){
                case '*':
                    numStack.push(numStack.pop() * parseInt(numStr));
                    break;
                case '/':
                    numStack.push(~~(numStack.pop() / parseInt(numStr)));
                    break;
                case '-':
                    numStack.push(-parseInt(numStr));
                    break;
                default:
                    numStack.push(parseInt(numStr));
            }
            lastSymbol = s[i];
            numStr = '';
            continue;
        }
        numStr += s[i];
    }
    //计算总和 reduce
    return numStack.reduce((_, val)=> _ + val, 0);
};

