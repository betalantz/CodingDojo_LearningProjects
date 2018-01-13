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
            if (!node.left)
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
            if (!node.right)
                node.right = newNode;
            else 
                // if right not null, recurse
                // until null is found
                this.insertNode(node.right, newNode)
        }
    } 
    // helper function that calls
    // removeNode with a given value
    remove(value) {
        // root is re-init with 
        // root of a modified tree
        this.root = this.removeNode(this.root, value)
    }
    removeNode(node, key){
        // if root is null, tree is empty
        if(!node)
            return null

        // if remove val is less than
        // root val, move to left
        else if (key < node.value) {
            node.left = this.removeNode(node.left, key)
            return node
        }
        // if remove val is greater than
        // root val, move to right
        else if (key > node.value) {
            node.right = this.removeNode(node.right, key)
            return node
        }
        // if value equals the root's val,
        // delete this node
        else {
            // delete node with no children
           if(!node.left && !node.right){
               node = null
               return node
           }
           // delete node with one child
           if(!node.left){
                node = node.right
                return node
           } 
           else if(!node.right){
                node = node.left
                return node
           }
           // delete node with 2 children
           // min node of right subtree
           // stored in temp
           let temp = this.findMin(node.right)
           node.value = temp.value

           node.right = this.removeNode(node.right, temp.value)
           return node 
        }

    }

    // Helper functions

    // finds the minimnum node value in a tree
    // searching begins with a given node
    findMin(node){
        if(!node.left)
            // if the left of a node is null,
            // it must be the minimum
            return node
        else
            return this.findMin(node.left)
    }
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
    // performs pre-order traversal of tree
    preOrder(node){
        console.log(node.value);
        this.inOrder(node.left)
        this.inOrder(node.right)
    }
    // performs post-order traversal of tree
    postOrder(node){
        this.inOrder(node.left)
        this.inOrder(node.right)
        console.log(node.value);
    }
    // search for a node with the given value
    search(node, value){
        // if tree is empty, return null
        if(node===null)
            return null;

        // if search value is less than curr node's
        // move left
        else if (value < node.value)
            return this.search(node.left, value);

        // if search value is greater than curr node's
        // move right
        else if (value > node.value)
            return this.search(node.right, value);

        // if search value is equal to curr node's
        // return node
        else
            return node;
    }
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

let root = BST.getRoot()

// prints 5 7 9 10 13 15 17 22 25 27
BST.inOrder(root)

// Removing node with no children 
BST.remove(5);
             
             
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17 
             
                         
root = BST.getRoot();
             
// prints 7 9 10 13 15 17 22 25 27
BST.inOrder(root);
// Removing node with one children 
BST.remove(7);
             
//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17 
             
             
root = BST.getRoot();
 
// prints 9 10 13 15 17 22 25 27
BST.inOrder(root);
             
// Removing node with two children 
BST.remove(15);
     
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
 
root = BST.getRoot();
console.log("inorder traversal");
 
// prints 9 10 13 17 22 25 27
BST.inOrder(root);
             
console.log("postorder traversal");
BST.postOrder(root);
console.log("preorder traversal");
BST.preOrder(root);
