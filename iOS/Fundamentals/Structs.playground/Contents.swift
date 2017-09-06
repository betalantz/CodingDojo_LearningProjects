//struct Rectangle {
//    var width = 10
//    var height = 20
//    func printDesc() {
//        print("I have a width of \(width) and a height of \(height)")
//    }
//    mutating func doubleWidth() {                // Why do we need the mutating keyword here?
//        width *= 2
//    }
//}
//var myRectangle = Rectangle()           // Taking advantage of type inference
//print("\(myRectangle.width)")

struct Rectangle {
    var width: Int
    var height: Int
}
let rectangle = Rectangle(width: 200, height: 400)

