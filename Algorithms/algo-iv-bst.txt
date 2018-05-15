function Node(value) {
    this.val = value
    this.left = null
    this.right = null
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    add(value) {
        const node = new Node(value)
        if(!this.root) {
            this.root = node
        } else {
            let curr = this.root
            while(curr) {
                if(node.val < curr.val) {
                    if(!curr.left) {
                        curr.left = node
                        break
                    }
                    curr = curr.left
                } else if (node.val >= curr.val) {
                    if(!curr.right) {
                        curr.right = node
                        break
                    }
                    curr = curr.right
                } else {
                    break
                }
            }
        }
    }

    contains(val) {
        if(!this.root){
            return console.log('No root node found');
        }
        let curr = this.root
        while(curr){
            if(val===curr.val){
                return true
            }
            if(val<curr.val){
                curr = curr.left
            } else {
                curr = curr.right
            }
        }
        return false
    }
    min(node) {
        if(!node){
            node = this.root
        }
        while(node.left){
            node = node.left
        }
        return node.val
    }

    max(node) {
        if(!node){
            node = this.root
        }
        while(node.right){
            node = node.right
        }
        return node.val
    }

    printByLevel() {
        if(!this.root) {
            return console.log('No root node found');
        }
        const newline = new Node('\n')
        const queue = [this.root, newline]
        let string = ''
        while(queue.length) {
            const node = queue.shift()
            string += node.val.toString() + (node.val !== '\n' ? ' ' : '')
            if(node === newline && queue.length) {
                queue.push(newline)
            }
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        console.log(string.trim());
    }
}

const BST = new BinarySearchTree()
BST.add(5)
BST.add(3)
BST.add(7)
BST.add(2)
BST.add(4)
BST.add(4)
BST.add(6)
BST.add(8)
BST.printByLevel()
console.log(BST.contains(10));
console.log(BST.contains(8));
// const myBST = new BinarySearchTree()
// console.log(myBST.contains(2));
console.log(BST.min());
console.log(BST.max());


