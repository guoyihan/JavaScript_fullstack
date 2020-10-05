function find(str) {
    let state = start
    for (let c of str) {
        state = state(c)
    }
    return state === end
}
function start() {
    if (c === 'a') return founda(c)
    return start
}


function end (c) {
    return end


}

function founda() {
    if (c === 'a') return foundb()
    return start
}

function foundb() {
    if (c === 'b') return foundc()
    return start
}
function foundc() {
    if (c === 'c') return end()
    return start
}


