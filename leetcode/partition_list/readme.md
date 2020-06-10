#  分隔链表   86
LinkedrList x
隔成两个区  每个节点的初始相对位置
1 2 2    4 3 5

1. 形成两个区?  每个区都链表
定义两个链表 smaller bigger
2. 一次链表
  x 值小得,   smaller
  大得,       bigger
3. 将这两个区连起来 smaller.next = bigger

思路:
    通过两个链表  分隔链表得不同区域得子链表, 两个子链表在组合起来