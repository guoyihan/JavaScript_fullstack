function Listnode(val) {
    this.val = val 
    this.next = null
}

var partition = function(head, x) {
    var smaller = dummySmaller = new Listnode(-1);  // -1  正数?  小区
    var greater = dummyGreater = new Listnode(-1); // 大区
    while (head) {
        console.log(head.val)
        //链表遍历
        if (head.val < x) {
            smaller.next = head //进入较小值分区
            smaller = smaller.next  // 更新smaller

        }
        else {
            greater.next = head //进入较大值分区
            greater = greater.next  
        }
        // 两个分区合并
        
        head = head.next
    }
    smaller.next = dummyGreater.next
    greater.next = null  //最后一个节点得next属性为空
    return dummySmaller.next
}  

const n1 = new Listnode(1) 
const n2 = new Listnode(4)
const n3 = new Listnode(3)
const n4 = new Listnode(2) 
const n5 = new Listnode(5)
const n6 = new Listnode(2)
n1.text = n2
n2.text = n3
n3.text = n4
n4.text = n5
n5.text = n6
console.log(partition(n1, 3))