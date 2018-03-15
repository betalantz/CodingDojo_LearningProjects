function Node(val) {
    this.val = val;
    this.next = null;
    this.removeSelf = function(){
        if (this.next){
            let temp = this.next
            this.val = temp.val
            this.next = temp.next
            temp.next = null
        } else {
            this.val = null
        }
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.totalItems = 0;
    }

    addBack(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.totalItems++;
    }

    display() {
        let output = '';
        let current = this.head;
        while (current) {
            output += current.val + ' ';
            current = current.next;
        }
        console.log(output.trim());
    }

    length() {
        return this.totalItems;
    }

    splitOnVal(val) {
        if(!this.head){
            return null
        }
        let current = this.head
        let prev = this.head
        let count = 0
        while (current) {
            if (current.val==val){
                const resSLL = new SingleLinkedList()
                resSLL.head = current
                prev.next = null
                resSLL.totalItems = (this.totalItems-count)
                this.totalItems = count
                return resSLL
            } else {
                prev = current
            }
            current = current.next
            count++
        }
        return null
    }

    partition(val) {
        if (!this.head){
            return null
        }
        const listLT = new SingleLinkedList()
        const listGTE = new SingleLinkedList()
        let current = this.head
        let tail = this.head
        let pivot = this.head
        while (current) {
            let copy = new Node(current.val)
            if (current.val < val) {
                if (!listLT.head){
                    tail = copy
                }
                copy.next=listLT.head
                listLT.head = copy
            } else if (current.val === val) {
                pivot = copy
            } else {
                copy.next = listGTE.head
                listGTE.head = copy
            }
            current = current.next
        }
        tail.next = pivot
        pivot.next = listGTE.head
        return listLT
    }

    deleteGivenNode(val) {
        if (!this.head){
            return null
        }
        let current = this.head
        while (current) {
            if (current.val===val) {
                current.removeSelf()
                this.totalItems--
                return true
            }
            current = current.next
        }
        return false
    }
}

const SLL = new SingleLinkedList();
SLL.addBack(1);
SLL.addBack(3);
SLL.addBack(5);
SLL.addBack(2);
SLL.addBack(4);
SLL.display();
console.log(SLL.length());
const resSLL = SLL.splitOnVal(5);
SLL.display();
console.log(SLL.length());
resSLL.display();
console.log(resSLL.length());
SLL.addBack(9);
SLL.addBack(2);
SLL.addBack(12);
SLL.display();
const part1 = SLL.partition(3);
part1.display();
SLL.display()
SLL.deleteGivenNode(12);
SLL.display();