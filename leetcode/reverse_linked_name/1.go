type ListNode struct {
	    Val int
	    Next *ListNode
	}

func reverseList(head *ListNode) *ListNode {
   var prev *ListNode
   for head != nil {
	   temp := head.Next //后继节点
	   head.Next = prev  //指向前驱节点
	   prev := head   //前驱节点设置为当前节点
	   head = temp   //当前节点变成原节点的下一个节点
   }
   return prev
}