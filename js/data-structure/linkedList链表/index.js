// 链表是一个线性结构, 同时也是一个天然的递归结构, 链表结构可以充分利用计算机
// 实现灵魂的内存动态管理. 没有数组一样的随机读取的优点


//单向链表
class Node {
    constructor(v, next) {
        this.value = v
        this.next = next
    }
}

class LinkList {
    constructor() {
        //链表长度
        this.size = 0
        // 头部
        this.dummyNode = new Node(null,null)
    }
    find(header, index, currentIndex) {
        if(index === currentIndex) return header

        return this.find(header.next, index, currentIndex + 1)
    }

    addNode(v, index) {
        //查找当前添加元素的索引
        this.checkIndex(index)
        // 当往链表的末尾插入时,prev.next 为空
        // 其他情况 ,需要设置prev.next 为插入的节点
        let prev = this.find(this.dummyNode, index, 0)
        prev.next = new Node(v, prev.next)
        this.size ++
        return prev.next
    }

    insertNode(v, index) {
        return this.addNode(v, index)
    }

    addToFirst(v) {
        return this.addNode(v, 0)
    }
    addToLast(v) {
        return this.addNode(v, this.size)
    }
    checkIndex(index) {
        if (index < 0 || index > this.size) {
            throw Error('index error')
        }
    }
    remove(index, isLast) {
        this.checkIndex(index)
        index = isLast? index -1 : index,0
        let prev = this.find(this.dummyNode, index ,0)
        let node = prev.next
        prev.next = node.next
        node.next = null
        this.size --
        return node
    }
    
}

let link = new LinkList()
link.addToFirst('aaa')
link.insertNode('bbb', 1)
link.remove(1, false)
console.log(link)








// leetcode 剑指Offer 18
function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    

var deleteNode = function(head, val) {
    let headNode = new ListNode()
    headNode.next = head
    let previous = headNode
    let current = head 

    
    while (current) {
        if (current.val === val) {
            let temp = current.next
            previous.next = temp 
            current.next = null 
            break;
        }
        previous = current
        current = current.next
        
    }
    return headNode.next
};