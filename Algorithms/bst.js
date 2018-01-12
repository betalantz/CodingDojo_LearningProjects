// Node class
class Node {
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
// Binary search tree class
class BinarySearchTree {
    constructor(){
        // root of a binary search tree
        this.root=null
    }

    // functions to be implemented

    // helper method creates new node to be
    // inserted and calls insertNode
    insert(value){
        // Creating a node and initializing value
        const newNode = new Node(value)
        // check if no root, then make node root
        if (!this.root) 
            this.root = newNode;
        else
            // find correct position in tree and
            // insert the node
            this.insertNode(this.root, newNode)
    }
    // Method to insert a node in a tree
    // traversing the tree to find the correct 
    // location for a given value
    insertNode(node, newNode){
        // if new value is less than curr node value
        // move left
        if (newNode.value < node.value){
            // if left is null, insert here
            if (!this.left)
                node.left = newNode;
            else
                // if left not null, recurse 
                // until null reached
                this.insertNode(node.left, newNode)
        } 
        // if new value is greater than the node value
        // move right
        else {
            // if right is null, insert here
            if (!this.right)
                node.right = newNode;
            else 
                // if right not null, recurse
                // until null is found
                this.insertNode(node.right, newNode)
        }
    } 
    // remove(value)

    // Helper functions
    // findMin()
    // returns root of the tree
    getRoot() {
        return this.root
    }
    // performs in-order traversal of tree
    inOrder(node) {
        if(node !== null){
            this.inOrder(node.left)
            console.log(node.value);
            this.inOrder(node.right)
        }
    }

    // preOrder(node)
    // postOrder(node)
    // search(node, value)
}

// Implementation
let BST = new BinarySearchTree()

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 

const root = BST.getRoot()

// prints 5 7 9 10 13 15 17 22 25 27
BST.inOrder(root)