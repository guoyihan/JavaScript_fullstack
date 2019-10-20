var parent = document.getElementById('content-items');
// console.log(parent);

var send = document.getElementById('send');
send.addEventListener('click',function(){
    var html = $(
        '<li class="content-item">'+
        '<div class="pic">'+
        '<img src="http://img0.imgtn.bdimg.com/it/u=1756633021,617129201&fm=26&gp=0.jpg" alt="" /></div>'+
        '<div class="massage">'+
            '<p class="name">江西移动10086</p>'+
            '<p class="detail">大力推广无限流量5G时代 关注江西移动公众号获取更多详情</p>'+
        '</div>'+
    '</li>'
    )
    html.appendTo(parent)

    // console.log(777);
    // var li = document.createElement('li');
    // // li.className='content-item';
    // li.setAttribute('class','content-item');
    // var divPic = document.createElement('div');
    // divPic.setAttribute('class','pic');
    // li.appendChild(divPic);

    // var divImg = document.createElement('img');
    // divImg.setAttribute('src','http://img0.imgtn.bdimg.com/it/u=1756633021,617129201&fm=26&gp=0.jpg');
    // divPic.appendChild(divImg);

    // var divMassage = document.createElement('div');
    // divMassage.setAttribute('class','massage');
    // li.appendChild(divMassage);

    // var pName = document.createElement('p');
    // var pNameText = document.createTextNode('黄小心');
    // pName.appendChild(pNameText);

    // var pDetail = document.createElement('p');
    // var pDetailText = document.createTextNode('有一说一，确实');
    // pDetail.appendChild(pDetailText);

    // pName.setAttribute('class','name');
    // pDetail.setAttribute('class','detail');

    // divMassage.appendChild(pName);
    // divMassage.appendChild(pDetail);

     //parent.appendChild(li);
});
