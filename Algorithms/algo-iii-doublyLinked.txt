function dlNode(val) {
    if (!(this instanceof dlNode)){
        return new dlNode(val);
    }
    this.val = val;
    this.prev = null;
    this.next = null;
}

class dList {
    constructor() {
        if (!(this instanceof dList)){
            return new dList();
        }
        this.head = null;
        this.tail = null;
        this.numberOfNodes = 0;
    }

    push(val) {
        const node = new dlNode(val)
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.numberOfNodes++;
    }

    display() {
        let output = '';
        let current = this.head;
        while (current) {
            output += `${current.val} `;
            current = current.next;
        }
        console.log(output.trim());
    }

    length() {
        return this.numberOfNodes;
    }

    prepend(val, before) {
        const node = new dlNode(val)
        if (!this.head) {
            return null
        } else {
            let current = this.head
            while (current) {
                if (current.val===before){
                    if (current==this.head){
                        node.next = this.head
                        this.head.prev = node
                        this.head = node
                    } else {
                        node.next = current
                        current.prev.next = node
                        node.prev = current.prev
                        current.prev = node
                    }
                    this.numberOfNodes++
                }
                current = current.next
            }
        }
    }

    append(val, after) {
        const node = new dlNode(val)
        if (!this.head) {
            return null
        } else {
            let current = this.head
            while (current) {
                if (current.val===after){
                    if (current==this.tail){
                        node.prev = this.tail
                        this.tail.next = node
                        this.tail = node
                    } else {
                        node.prev = current
                        current.next.prev = node
                        node.next = current.next
                        current.next = node
                    }
                    this.numberOfNodes++
                }
                current = current.next
            }
        }
    }

    traverseReverse(func) {
        let current = this.tail
        while (current) {
            if (func) {
                func(current)
            }
            current = current.prev
        }
    }

    kthToLast(k) {
        let current = this.tail
        for(let i = 0; i < k; i++){
            current = current.prev
        }
        return current.val
    }

    isPalindrome() {
        let forward = '';
        let backward = '';
        let current = this.head;
        let cur = this.tail;
        while (current) {
            forward += `${current.val} `;
            current = current.next;
        }
        while (cur) {
            backward += `${cur.val} `
            cur = cur.prev
        }
        if (forward===backward){
            return true
        } else {
            return false
        }
    }

    isValid() {
        let current = this.head
        while (current) {
            if (this.head==current){
                if (((current.next!=null) && (current.prev==null))==false){
                    return false
                }
            } else if (this.tail==current){
                if (((current.next==null) && (current.prev!=null))==false){
                    return false
                }
            } else if (((current.next!=null) && (current.prev!=null))===false){
                return false
            }
            current = current.next
        }
        return true
    }

    breakLink(k) {
        if (this.tail){
            let current = this.tail
            for(let i = 0; i < k; i++){
                current = current.prev
            }
            current.prev = null
            return true
        }
        return false
    }

    reverseList() {
        let current = this.head
        while (current) {
            if (!current.prev){
                this.tail=current
            } else if (!current.next){
                this.head=current
            }
            let temp = current.next
            current.next = current.prev
            current.prev = temp
            current = temp
        }
    }

    makeLoop(target, loop) {
        if(this.head){
            let current = this.head
            let targ
            for(let i=0; i<loop; i++){
                if(i==target){
                    targ = current
                }
                current = current.next
            }
            current.next = targ
            return true
        }
        return false
    }

    findLoop() {
        if (!this.head){
            return null
        }
        let current = this.head
        let trailing = this.head
        while(current){
            if (current.visited) {
                return trailing
            }
            current.visited = true
            trailing = current
            current = current.next
        }
        return false
    }
}

const DLL = new dList();
DLL.display();
DLL.push(1);
DLL.push(2);
DLL.push(3);
DLL.push(4);
// DLL.push(5);
// DLL.push(2);
// DLL.push(1);
DLL.display();
DLL.prepend(5, 3);
DLL.display();
DLL.traverseReverse(node => {console.log(node.val);})
console.log(DLL.kthToLast(2));
console.log(DLL.isPalindrome());
// DLL.breakLink(2);
// DLL.display();
// DLL.traverseReverse(node => {console.log(node.val);})
console.log(DLL.isValid());
DLL.reverseList();
DLL.display();
DLL.makeLoop(1,4);
console.log(DLL.findLoop());
