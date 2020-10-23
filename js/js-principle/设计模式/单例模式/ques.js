class Storage {
    setItem( key, value ) {
        return localStorage.setItem(key, value)
    }
    getItem ( key ) {
        return localStorage.getItem(key)
    }
    static getInstance() {
        if(!Storage.instance) {
            Storage.instance = new Storage()
        }
        return Storage.instance
    }

}

const storage1 = Storage.getInstance()
storage1.setItem('name', '蜗牛')

storage1.getItem('name') // 蜗牛