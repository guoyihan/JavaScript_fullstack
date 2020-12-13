
  function reverseLinkList(head) {
    let current = head;
    let pre = null;
    while(current) {
      let next = current.next;
      // 本次交换
      current.next = pre;
      // 这个节点交换完之后 走到下一个
      pre = current;
      current = next;
    }
    // current = null 退出
    return pre;
  }
