import UIKit

struct Point {
    var x: Double
    var y: Double
}
let pointA = Point(x: 1.0, y: 1.0)

struct Line {
    var start: Point
    var end: Point
    func getLength() -> Double {
        let horiz = Int(start.x-end.x)^2
        let vert = Int(start.y-end.y)^2
        return Double(horiz + vert).squareRoot()
    }
}
let myLine = Line(start: Point(x: 1.0, y: 1.0), end: Point(x: 3.0, y: 1.0))

struct Triangle {
    var Points: [Point]
}
//let triangle = Triangle(Points: [Point(x: 1.0, y: 1.0), Point(x: 4.0, y: 1.0), Point(x: 4.0, y: 3.0)])

