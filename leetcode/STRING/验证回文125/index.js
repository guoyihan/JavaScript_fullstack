function aa(s) {
    if(!s.length){
        return true 
    }
    s = s.replace(/[^a-z0-9A-Z]/g , '').toLowerCase()
    let len = s.length
    let i = 0,
    j = len -1;
    for (i; i <= len/2; i++ ,j--){
        if (s[i] != s[j]){
            console.log(1)
            return false
        }
    }
    return true
};

s="A man, a plan, a canal: Panama"

aa(s)
