//  可以被运行的对象 叫函数   LRUCache();
function LRUCache(capacity) {
    this.capacity = capacity;//这是容量
    this.obj = {}; // get set   obj负责存储数据
    // push splice  pop  unshift
    this.arr = []; // 优先级  只能是两个
}


LRUCache.prototype.get = function(key) {
    var val = this.obj[key];
    if (val) {
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
        return val;
    } else {
        return -1;
    }
    // 没有就 -1  
    // 处理优先级 用过的数据提到最前面

}

LRUCache.prototype.set = function(key, value) {
    if (this.obj[key]) {   //已存在
        this.obj[key] = value; //已更新
        // 调整它的优先级,  再某个位置?  删除,  移到最前面
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
        return;
    }
    if (this.capacity === this.arr.length) {   //表示放满了
        var  k = this.arr.pop();
        this.obj[k] = undefined;
    }
    this.obj[key] = value;
    this.arr.unshift(key); //放到最前面,  最前面是最优先
}


let cache = new LRUCache(2);
// console.log(cache.capacity);
cache.set(1, 1);
cache.set(2, 2);
cache.get(1);       // 返回  1
cache.set(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.set(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4

// console.log(cache.get(1));
// console.log(cache.arr, cache.obj);
