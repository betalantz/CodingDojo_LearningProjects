function Node(val) {
    this.val = val;
    this.next = null;
};

function SingleLinkedList() {
    this.head = null;
    this.totalItems = 0;
};

SingleLinkedList.prototype.add = function(val) {
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
};
SingleLinkedList.prototype.display = function() {
    let output = '';
    let current = this.head;
    while (current) {
        output += current.val + ' ';
        current = current.next;
    }
    console.log(output.trim());
};
SingleLinkedList.prototype.length = function() {
    return this.totalItems;
};
SingleLinkedList.prototype.min = function() {
    let min = this.head.val;
    if(!this.head){
        return null
    } else {
        let current = this.head;
        while(current){
            if (current.val<min){
                min = current.val;
            }
            current = current.next;
        }
    }
    return min
};
SingleLinkedList.prototype.max = function() {
    let max = this.head.val;
    if(!this.head){
        return null
    } else {
        let current = this.head;
        while(current){
            if (current.val>max){
                max = current.val;
            }
            current = current.next;
        }
    }
    return max
};
SingleLinkedList.prototype.average = function() {
    if(!this.head){
        return null
    } else {
        let current = this.head;
        let total = 0
        var avg
        while(current){
            total += current.val
            current = current.next;
        }
        avg = (total / this.totalItems)
    }
    return avg
};
SingleLinkedList.prototype.removeVal = function(val) {
    if(!this.head){
        return null
    } else {
        let current = this.head;
        let prev = this.head;
        while(current){
            if (current.val===val){
                if (current == this.head){
                    this.head = this.head.next;
                    current.next = null;
                } else {
                    prev.next = current.next;
                    current.next = null;
                }
                this.totalItems--;
            } else {
                prev = current;
            }
            current = current.next
        }
    }
};
SingleLinkedList.prototype.prependVal = function(val, before) {
    let newNode = new Node(val)
    if(!this.head){
        return null
    } else {
        let current = this.head;
        let prev = this.head;
        while(current){
            if (current.val===before){
                if (current == this.head){
                    newNode.next = this.head;
                    this.head = newNode;
                } else {
                    newNode.next = current;
                    prev.next = newNode
                }
                this.totalItems++;
            } else {
                prev = current;
            }
            current = current.next
        }
    }
};
SingleLinkedList.prototype.appendVal = function(val, after) {
    let newNode = new Node(val)
    if(!this.head){
        return null
    } else {
        let current = this.head;
        while(current){
            if (current.val===after){
                newNode.next = current.next;
                current.next = newNode;
                this.totalItems++;
                return true
            }
            current = current.next
        }
        return false
    }
};

const SLL = new SingleLinkedList();
SLL.add(1);
SLL.add(2);
SLL.add(3);
SLL.add(4);
SLL.display();
console.log(SLL.length());
console.log(SLL.min());
console.log(SLL.max());
console.log(SLL.average());
SLL.removeVal(4);
SLL.display();
console.log(SLL.length());
SLL.prependVal(9, 1);
SLL.display();
console.log(SLL.length());
SLL.appendVal(5, 1);
SLL.display();
console.log(SLL.length());
SLL.appendVal(-1, 3);
SLL.display();
console.log(SLL.length());

