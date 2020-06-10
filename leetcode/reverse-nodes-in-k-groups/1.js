function ListNode(val) {
    this.val = val
    this.next = null
}

var n1 = new ListNode(1)
var n2 = new ListNode(2)
var n3 = new ListNode(3)
var n4 = new ListNode(4)
var n5 = new ListNode(5)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
console.log(n1, '----------')
var reverseKGroup = function(head, k) {
    if(!head || k == 1) { //空链表 k为1,
        return head
    }
    var dummy = { //哨兵结点
        next: head
    }

    //reverse
    var start = dummy // 初始化dummy 动态变化  之后会变成每个小组的前驱节点
    var end = head//初始化时   与k 相关  指向小组的第一个节点
    var count = 0//计数多少节点
    while (end != null) { // 一次遍历
        count++
        if(count % k == 0) {  //整数 要反转
            // 更新start 一次反转后, start应该是这次翻转的为尾系节点
            // if (count < 3 ){
            //     // [1,2]
            //     console.log(start.val, end.next.val)
            // }
            start = reverse(start, end.next) //翻转小组 ,翻转之后要能跟其他小组连接上
            end = start.next//第一次节点
        } else {
            end = end.next// 更新end 的值           
        }
    }
    
    
    return dummy.next
}

//start, end 是要reverse的
//一次翻转
var reverse = function(start, end) {
    var cur = start.next // 头节点
    var pre = start //前驱节点 
    var first = cur //保存第一个节点  翻转以后成为尾节点  下一组的头指针
    while(cur != end) { //end  3  当前小组的 [1, 2]
        var temp = cur.next 
        cur.next = pre 
        pre = cur 
        cur = temp
    }
    //pre 变成小组头节点
    start.next = pre
    first.next = cur // 原来的头节点变成尾节点
    // 小组要链起来 上一次的尾节点指向下个小组的开始节点
    return first

}


console.log(reverseKGroup(n1, 2))