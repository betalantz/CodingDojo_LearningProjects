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

