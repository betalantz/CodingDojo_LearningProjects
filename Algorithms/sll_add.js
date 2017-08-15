function sll(){
    this.head = null;

    function Node(val){
        this.val = val;
        this.next = null;
    };


    this.add = function(val){
        var myNode = new Node(val);
        if(this.head === null){
            this.head = myNode;
        } else {
            var current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = myNode;
        }
    };

    this.show = function() {
        while (this.head != null) {
            console.log(this.head.value);
            this.head = this.head.next;
        }
    };
}
var conga = new sll();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Goldfish');
conga.add('Hamster');
conga.show();
