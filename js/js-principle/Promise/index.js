function Mypromise (fn) {
    let self = this
    this.value = undefined
    function resolve(value) {
        console.log(value);
        self.value = value 
    }
    function reject() {}
    fn(resolve, reject)
}
Mypromise.prototype.then = function (fn) {
    fn(this.value)
}