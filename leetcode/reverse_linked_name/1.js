function ListNode(val) {
    this.val = val
    this.next = null
}

var reverseList = function(head) {
    if(!head || !head.next)  return  head // 空链表或者只有头节点
    let cur = head //当前节点
    let pre = null
    while (cur) { //遍历
        const next = cur.next //后继节点
        cur.next = pre; //反过来, 将当前节点得指针指向前一个节点
        //如果cur 是头节点
        pre = cur; //前驱节点变成当前节点
        cur = next; // 后继节点变成当前节点
    }
    return cur
}
const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
const n4 = new ListNode(4)
const n5 = new ListNode(5)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
console.log(n1)