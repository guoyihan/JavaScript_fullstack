// setTimeout(() => {
//     console.log(1)
// }, 0)

// new Promise((resolve, reject) => {
//     console.log(2)
// })




console.log('script start');

async function async1() {
    console.log('123')
  await async2()
  console.log('async1 end');
  console.log('1234');
}

async function async2() {
  console.log('async2 end');
}
async1()

setTimeout(function() {
  console.log('setTimeout');
}, 0)

new Promise(resolve => {
  console.log('Promise');
  resolve()
})
  .then(() => {
    console.log('promise1');
  })
  .then(() => {
    console.log('promise2');
  })

console.log('script end');
