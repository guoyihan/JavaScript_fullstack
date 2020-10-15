function SuperType() {
    this.colors = ['red', 'green', 'blue']
}

function SubType () {
    SuperType.call(this)
}

let instance = new SubType()

instacne1.colors.push('pink')
console.log(instacne1.colors)

let instance2  = new SubType()
console.log(instance2.color);