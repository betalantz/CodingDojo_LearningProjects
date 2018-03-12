function sNode(val) {
    this.val = val;
    this.next = null;
    }

function sList() {
    this.head = null;
    }
node1 = new sNode(1);
node2 = new sNode(2);
node3 = new sNode(3);
node4 = new sNode(4);
node5 = new sNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

myList = new sList();
myList.head = node1;

function displayList(list) {
    if (!list.head) {
        console.log("No list passed.");
    } else {
        let current = list.head
        while (current.next) {
            console.log("Node: " + current + " Value: " + current.val + " Next: " + current.next);
            current = current.next
        }
        console.log("Node: " + current + " Value: " + current.val + " Next: " + current.next);
    }
}
displayList(myList)

function addFront(node, num){
    node0 = new sNode(num)
    node0.next = node
    myList.head = node0
    return node0
}
addFront(node1, 0)
displayList(myList)
addFront(node0, -1)
displayList(myList)
console.log(node0.val);

function contains(node, num){
    if(!node){
        return false
    } else {
        let current = node
        while (current) {
            if (current.val === num) {
                return true
            }
            current = current.next
        }
    }
    return false
}
console.log(contains(node0, 5));
console.log(contains(node0, 9));

function removeFront(node){
    if(!node.next){
        return null
    } else {
        newFront = node.next
        myList.head = newFront
        node.next = null
        return newFront
    }
}

function front(node) {
    if(!node){
        return null
    } else {
        let result = node.val
        return result
    }
}

console.log(removeFront(node0));
console.log(front(newFront));
displayList(myList)