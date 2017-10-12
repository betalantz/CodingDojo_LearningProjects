let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: Array<number> = [1,2,3,4];
let myObj: any = { name:'Bill'};
let anythingVariable: any = "Hey";
anythingVariable = 25; 
let arrayOne: Array<boolean> = [true, false, true, true]; 
let arrayTwo: Array<any> = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };

// object constructor
class MyNode {
    val: number
    _priv: number

    constructor(value: number){
        this.val = value
    }
    doSomething(){
        this._priv = 10
    }
}
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);


function myFunction(val: string): void {
    console.log(val);
    return;
}
myFunction('Hello world!')

function sendingErrors(message: string): never {
	throw new Error(message);
}
sendingErrors("Error message")
