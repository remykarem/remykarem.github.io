# Object-oriented programming

```swift
class Animal {
    let name: String
    
    init(name: String) {
        self.name = name
    }
    
    func speak() { }
}
```

```swift
// Stored property:
// - property observers (only work after initialisation)
// - lazy variables
//      - won't be assigned UNTIL THE FIRST TIME YOU NEED IT
//      - could be a constant
//      - expensive to calculate
//      - might not be used by every instance
// - static variables that won't change across objects
// Computed property = getter/setter
struct Wizard {
    
    // Stored property
    var firstName: String {
        willSet {
            print("\(firstName) will be set to \(newValue)")
        }
        didSet {
            if firstName.contains(" ") {
                print("No spaces allowed! \(firstName) is not a first name. Reverting name to \(oldValue)")
                firstName = oldValue
            }
        }
    }
    var lastName: String
    lazy var magicalCreature = firstName
    
    init(firstName: String, lastName: String) {
        self.firstName = firstName
        self.lastName = lastName
    }
    
    // Computed property / getters and setters
    var fullName: String {
        get {
            return "\(firstName) \(lastName)"
        }
        set {
            let nameSubstrings = newValue.split(separator: " ")
            guard nameSubstrings.count >= 2 else {
                print("\(newValue) is not a full name")
                return
            }
            let nameStrings = nameSubstrings.map(String.init)
            firstName = nameStrings.first!
            lastName = nameStrings.last!
        }
        //        set(newFullName) {
        //            let nameSubstrings = newFullName.split(separator: " ")
        //            guard nameSubstrings.count >= 2 else {
        //                print("\(newFullName) is not a full name")
        //                return
        //            }
        //        }
    }
}
var wizard = Wizard(firstName: "Raimi", lastName: "Karim")
wizard.firstName = "Hermion e"
wizard.firstName
wizard.magicalCreature
wizard.firstName = "Hermione"
wizard.magicalCreature

// Methods: initializers, mutating methods, extensions
// Naming convention for mutating function is in present tense.
// For non mutating, use past tense
enum Weekday: CaseIterable {
    case monday, tuesday, wednesday, thursday, friday, saturday, sunday
    
    mutating func advance(by dayCount: UInt) {
        let indexOfToday = Weekday.allCases.firstIndex(of: self)!
        let indexOfAdvancedDay = indexOfToday + Int(dayCount)
            
        self = Weekday.allCases[indexOfAdvancedDay % Weekday.allCases.count]
    }
}
Weekday.allCases
var weekday: Weekday = .tuesday
weekday.advance(by: 6)

struct Time {
    var day: Weekday
    var hour: UInt
    
    init(day: Weekday, hour: UInt = 0) {
        self.day = day
        self.hour = hour
    }
    
    mutating func advance(byHours hourCount: UInt) {
        let (dayCount, hour) = (self.hour + hourCount).quotientAndRemainder(dividingBy: 24)
        day.advance(by: dayCount)
        self.hour = hour
    }
    
    func advanced(byHours hourCount: UInt) -> Time {
        var time = self
        time.advance(byHours: hourCount)
        return time
    }
}

var time = Time(day: .monday)
time.advance(byHours: 24*3+5)

// Classes I
class NamedShape {
    var numberOfSides: Int = 0
    var name: String
    
    init(name: String) {
        self.name = name
    }
    
    func description() -> String {
        return "A shape with \(numberOfSides) sides."
    }
}
var shape = NamedShape(name: "Hey")
shape.numberOfSides = 5
shape.description()

// Classes II: Inheritance
class Square: NamedShape {
    var sideLength: Double
    
    init(sideLength: Double, name: String) {
        self.sideLength = sideLength
        super.init(name: name)
        numberOfSides = 4
    }
    
    func area() -> Double {
        return sideLength * sideLength
    }
    
    override func description() -> String {
        return "A square with length \(sideLength)"
    }
}
let test2 = Square(sideLength: 4.5, name: "test square")
test2.area()
test2.description()

// Classes III: Getters and Setters
class EquilateralTriangle: NamedShape {
    var sideLength: Double
    
    init(sideLength: Double, name: String) {
        self.sideLength = sideLength
        super.init(name: name)
        numberOfSides = 3
    }
    
    var perimeter: Double {
        get {
            return 3.0 * sideLength
        }
        set {
            sideLength = newValue / 3.0
        }
    }
    
    override func description() -> String {
        return "An equilateral triangle with sides of length \(sideLength)"
    }
}
var triangle = EquilateralTriangle(sideLength: 3.1, name: "mytri")
print(triangle.perimeter)
triangle.perimeter = 4.0

// Classes IV: willSet and didSet
class TriangleAndSquare {
    var triangle: EquilateralTriangle {
        willSet {
            triangle.sideLength = newValue.sideLength
        }
    }
    var square: Square
    
    init(size: Double, name: String) {
        square = Square(sideLength: size, name: "mysquare")
        triangle = EquilateralTriangle(sideLength: size, name: "mytri")
    }
}
var triangleAndSquare = TriangleAndSquare(size: 10, name: "test")
print(triangleAndSquare.square.sideLength)
print(triangleAndSquare.triangle.sideLength)
triangleAndSquare.triangle = EquilateralTriangle(sideLength: 50, name: "larger square")
print(triangleAndSquare.triangle.sideLength)

// Classes: Polymorphism and casting `as`
let square0 = Square(sideLength: 1, name: "mysq")
let square00 = square0 as NamedShape
let square01 = square0 as! NamedShape // forced downcast
if let square = square00 as? Square {
    print("ya")
} else {
    print("na")
}

// Classes: Initializers - Required and Convenience
class Personne {
    var firstName, lastName: String
    
    required init(firstName: String, lastName: String) {
        self.firstName = firstName
        self.lastName = lastName
    }
}
class Etudiant: Personne {
    var grades: [String] = []
    
    convenience init(transfer: Student) {
        self.init(firstName: transfer.firstName, lastName: transfer.lastName)
        grades = transfer.grades
    }
}
class EtudiantAtheletique: Etudiant {
    var sports: [String]
    
    init(firstName: String, lastName: String, sports: [String]) {
        self.sports = sports
        super.init(firstName: firstName, lastName: lastName)
    }
    
//    required init(firstName: String, lastName: String) {
//        self.sports = []
//        super.init(firstName: firstName, lastName: lastName)
//    }
    
    // Alternative to the above
    required convenience init(firstName: String, lastName: String) {
        self.init(firstName: firstName, lastName: lastName, sports: [])
    }
}
let etudiante = EtudiantAtheletique(firstName: "KKK", lastName: "lol", sports: ["foosball", "hockey"])
let etudiante2 = EtudiantAtheletique(firstName: "Kok", lastName: "pin")
```

```swift
// Classes: Deinitialized for memory deallocation
// Used when a variable storing a reference but now no longer referenced
// Memory for the object will be deallocated
class Person {
    let name: String
    var bestBuddy: Person?
    
    init(name: String) {
        self.name = name
    }
    
    deinit {
        print("The memory for \(name) has been deallocated")
    }
}
//var person = Person(name: "Thanos")
//person = Person(name: "Ultron")
var catty: Person? = Person(name: "Catty Pantherwaul")
var loki: Person? = Person(name: "Loki Moakley")
loki?.bestBuddy = catty
catty?.bestBuddy = loki
//loki = nil
catty?.bestBuddy = Person(name: "Dorothy")
catty = nil
```