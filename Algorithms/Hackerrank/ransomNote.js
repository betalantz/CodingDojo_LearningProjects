class HashTable {
    constructor(size) {
      this.values = {};
      this.numberOfValues = 0;
      this.size = size;
    }
  
    add(key) {
      const hash = this.calculateHash(key);
      if(!this.values.hasOwnProperty(hash)) {
        this.values[hash] = {};
      }
      if(!this.values[hash].hasOwnProperty(key)) {
        this.numberOfValues++;
      }
      this.values[hash][key]++;
    }
    search(key) {
        const hash = this.calculateHash(key);
        if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
          return this.values[hash][key];
        } else {
          return null;
        }
      }
}