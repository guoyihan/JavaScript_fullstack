function find1(str) {
    let founda = false, foundb = false
    for (let c of str) {
        if (c === 'a') {
            founda = true
        } else if (founda && c === 'b') {
            foundb = true
        } else if (foundb && c === 'c'){
            founda = false
            foundb = false
        }
    }
}