function test () {
    var food = 'apple'
    var obj = {
      eatFood:function a() {
        if (food != '') {
          console.log('I am eating ' + food)
          food = ''
        } else {
          console.log('There is nothing')
        }
      },
      pushFood: function b(myFood) {
        food = myFood
        console.log(food)
      }
    }
    return obj
  }
  var person = test()
  person.eatFood()
  person.eatFood()
  person.pushFood('pear')
  person.eatFood()
  //