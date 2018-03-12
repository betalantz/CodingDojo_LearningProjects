function Node(val) {
    this.val = val;
    this.next = null;
};

function SingleLinkedList() {
    this.head = null;
    this.length = 0;
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
    this.length++;
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
    return this.length;
};
SingleLinkedList.prototype.min = function() {

};
SingleLinkedList.prototype.max = function() {

};
SingleLinkedList.prototype.average = function() {

};
SingleLinkedList.prototype.removeVal = function(val) {

};
SingleLinkedList.prototype.prependVal = function(val, before) {

};
SingleLinkedList.prototype.appendVal = function(val, after) {

};

const SLL = new SingleLinkedList();
SLL.add(1);
SLL.add(2);
SLL.add(3);
SLL.add(4);
SLL.display();

