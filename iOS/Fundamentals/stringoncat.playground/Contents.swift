//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"
str += " you are so cool"

print("yea")

var name = "Anakin"
name = "Darth Vader"
print(name)

var myMutableString = "change me"
let myImmutableString = "can't change"
myMutableString += "!"


var myMutableArray = ["one"]
let myImmutableArray = ["uno"]
myMutableArray.append("two")

var myMutableDictionary = ["one": 1]
let myImmutableDictionary = ["uno": 1]
myMutableDictionary["two"] = 2
myMutableDictionary["one"] = 0
print(myMutableDictionary)

print("The maximum value \(UInt32.max)")
print("The minimum value \(UInt32.min)")

print("Division \(1.0/3)")

var x = 8 % 3
var y = 8 / 3
