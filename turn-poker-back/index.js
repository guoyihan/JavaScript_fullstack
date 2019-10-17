// console.log(a);                          
// var a = 1;
// 仅限var 相当于
// var a;
// console.log(a);                          
// a = 1;

const wrap = document.getElementById('wrap');
let images = [
    './img/h1.jpg',
    './img/h2.jpg',
    './img/h3.jpg',
    './img/h4.jpg',
    './img/h5.jpg',
    './img/h6.jpg',
    './img/h1.jpg',
    './img/h2.jpg',
    './img/h3.jpg',
    './img/h4.jpg',
    './img/h5.jpg',
    './img/h6.jpg',
  ]
images.sort((a,b) => 0.5 - Math.random());  //随机排列图片
let count = 0;
init();
const allImg = document.querySelectorAll('#wrap img')

function init() {
    for (let i = 0; i < 12; i++) {
        let img = document.createElement('img'); // 相当于html添加<img>标签
        img.src = "./img/nba.jpg";
        img.onclick = function() {
            changeImage(img, i);
        }
        wrap.appendChild(img);
    }
    let firstCard = null;
    let firstId = null;
    function changeImage(imgNode, i) {
        if (count === 0){           
            firstId = i;
            firstCard = images[i];
            imgNode.src = images[i];
            imgNode.classList.add('rotate-animation');   //通过添加类名达成开关的效果, 不过css中选择器表达的方式是 并且表达,见css16行
        } 
        if(count === 1 && i ===firstId)  return;
        if (count === 1) {
            //翻第二张
            imgNode.src = images[i];
            imgNode.classList.add('rotate-animation');
            setTimeout(() => {
                if (firstCard === images[i]) {
                    wrap.removeChild(allImg[firstId]);
                    wrap.removeChild(allImg[i]);
                }else {
                    allImg[firstId].classname = '';
                    allImg[i].className = '';
                    allImg[firstId].src = './img/nba.jpg';
                    allImg[i].src = './img/nba.jpg';
                }
                count = 0;
                firstCard = null;
                firstId= null;
            }, 1100);
            
        }
        count++;
    }
    
}


// var arr = [1, 2, 3, 4, 5];
// arr.sort((a,b) => b - a);      //b-a降序    a-b升序
// arr.sort((a,b) => 0.5 - Math.random());    // 乱序  伪随机算法




// const wrap = document.getElementById('wrap');

// let images = [
//   './image/h1.jpg',
//   './image/h2.jpg',
//   './image/h3.jpg',
//   './image/h4.jpg',
//   './image/h5.jpg',
//   './image/h6.jpg',
//   './image/h1.jpg',
//   './image/h2.jpg',
//   './image/h3.jpg',
//   './image/h4.jpg',
//   './image/h5.jpg',
//   './image/h6.jpg',
// ]
// let count = 0;
// images.sort((a, b) => 0.5 - Math.random());

// init();
// const allImg = document
// .querySelectorAll('#wrap img');
// function init() {
//   for (let i = 0; i < 12; i ++) {
//     // <img src="" class="" id="" />
//     let img = document.createElement('img');
//     img.src="./image/bg.jpg";
//     img.onclick = function() {
//       changeImage(img, i);
//     }
//     wrap.appendChild(img);
//   }
// }
// let firstCard = null;
// let firstId = null;
// function changeImage(imgNode, i) {
//   // imgNode.src = './image/h1.jpg';
//   if (count === 0) {
//     firstCard = images[i];
//     firstId = i;
//     imgNode.src = images[i];
//     imgNode.classList.add('rotate-animation');
//   }
//   // console.log(count, firstCard);
//   if (count === 1 && i === firstId) return;
//   if (count === 1) {
//     // 翻第二张
//     imgNode.src = images[i];
//     imgNode.classList.add('rotate-animation');
//     setTimeout(() => {
//     // start
//     if (firstCard === images[i]) {
//       // 1
//       wrap.removeChild(allImg[firstId]);
//       wrap.removeChild(allImg[i]);
//     } else {
//       // 2
//       allImg[firstId].className = '';
//       allImg[firstId].src = './image/bg.jpg';
//       allImg[i].className = '';
//       allImg[i].src = './image/bg.jpg';
//     }
//     count = 0;
//     firstId = null;
//     firstCard = null;
//     // end
//   }, 1100);
//   }
//   count ++;
// }
// var obj = { a: 1 };
// // console.log(obj.b);
// // undefined.c
// // console.log(obj.b.c);

// var arr = [1, 2, 3, 4, 5];
// // 生序
// // arr.sort((a, b) => a - b);
// // 降序
// // arr.sort((a, b) => b - a);
// // 乱序 随机排序 伪随机 不是真正的随机
// arr.sort((a, b) => 0.5 - Math.random());
// console.log(arr);