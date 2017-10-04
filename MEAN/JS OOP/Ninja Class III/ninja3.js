class Ninja{
    constructor(name){
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(`My ninja name is ${this.name}.`);
        return this
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
        return this
    }
    drinkSake(){
        this.health += 10
        console.log(`Kanpai! Now ${this.name}'s health is ${this.health}`)
        return this
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom() {
        super.drinkSake()
        console.log("Don't commit on master when drunk!")
    }
}
let blackNinja = new Ninja("Tanaka")
blackNinja.sayName().drinkSake().showStats()
// example output
let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
super_sensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

