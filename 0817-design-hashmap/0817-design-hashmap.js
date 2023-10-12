class MyHashMap {
    constructor() {
        this.data = new Map();
    }

    put(key, value) {
        this.data.set(key, value);
    }

    get(key) {
        return this.data.has(key) ? this.data.get(key) : -1;
    }

    remove(key) {
        this.data.delete(key);
    }
}
/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */