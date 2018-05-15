function SLNode(data) {
    this.data = data;
    this.next = null;
}

class SLQueue {
    constructor(){
        this.head = null
        this.tail = null
    }

    enqueue(data){
        if (!this.head) {
            this.head = this.tail = new SLNode(data);
        } else {
            const newNode = new SLNode(data);
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}