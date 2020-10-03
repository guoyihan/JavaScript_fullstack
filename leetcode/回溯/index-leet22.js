var generateParenthesis = function(n) {
    const res = []
  
    const diffs = (left, right, n, s, res) => {
        if (left === n && right === n) {
            res.push(s)
        }
        if (left < n) {
            diffs(left + 1, right, n, s + '(', res)
        }
        if (right < left) {
            diffs(left, right + 1, n, s + ')', res)
        }
        return res
    }
    return diffs(0, 0, n, "", res)
  };