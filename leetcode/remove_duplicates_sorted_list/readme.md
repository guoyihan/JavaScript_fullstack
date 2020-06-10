 # 删除有序数组中的重复项   26
 
- 一次遍历
  排好序 后面的项一定大于等于前面
  等于的 原地删除
  抽象 数理逻辑
- 动图
  github:  leetcodeanimation
  两个指针 pre cur
  cur 一直往前走 一次循环的每一项遍历
  pre 后面追
  pre cur   arr前一个,后一个
  不等于时pre+1
  相等时 pre不走, 会慢下来
  如果 cur pre 不一样    那么pre+1   值等于cur
  每个位置放什么数?
  pre 没跟上 cur的速度  表示有重复
  pre cur 中有空位
  pre+1 删除 把当前的cur值交给 pre

  - 快慢指针
    1. 一次循环 cur++ 一直跑
    2. 如果cur跟 pre arr中的坐标值\
      不等的话  pre++ 
      相等的话  pre 不动
    3. cur再走的时候,  继续比较
       新的cur  跟旧的pre 
       不等时  pre++  并且把cur的值赋予 pre
       把之前重复空出来的位置  给填上
    4. cur > length 则返回新的数组长度

-  数据结构 链表
   [1,1,2] 链表
   LinkedList   next
   1 1 1 重复next指向的1 改成 指向2即可

