function sll(){
    var head = null;

    function Node(val){
        this.val = val;
        this.next = null;
    };


    this.add = function(val){
        var myNode = new Node(val);
        if(head === null){
            head = myNode;
        } else {
            var current = head;
            while(current.next){
                current = current.next;
            }
            current.next = myNode;
        }
    };

    this.show = function() {
        while (head != null) {
            console.log(head.value);
            head = head.next;
        }
    };
}
var conga = new sll();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Goldfish');
conga.add('Hamster');
conga.show();
