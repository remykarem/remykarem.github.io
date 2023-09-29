# Protocol-oriented programming

```swift
protocol ExampleProtocol {
    
    // Property
    var simpleDescription: String { get }
    
    func adjust()
}
class SimpleClass: ExampleProtocol {
    var simpleDescription: String = "a simple class"
    
    func adjust() {
        simpleDescription += " Now adjusted."
    }
}
var a = SimpleClass()
a.adjust()
let aDescription = a.simpleDescription
```

```swift
// This allows you to encapsulate the functional concept in a way that doesn't require a base class

/// Retrns
///
/// kmkdmfd?
///
///     let hjhh = kmk
protocol Bird {
    /// HHHcddc
    var name: String { get }
    /// Can or not
    var canFly: Bool { get }
}

extension Bird {
    
    // Set the default behaviour to true whenever the type is also Flyable
    var canFly: Bool {
        return self is Flyable
    }
}

// or protocol: Bird: CustomStringConvertible
extension CustomStringConvertible where Self: Bird {
    var description: String {
        return canFly ? "I can fly" : "Guess I'll just sit =("
    }
}

/**
The area of the `Shape` instance.

Computation depends on the shape of the instance.
For a triangle, `area` is equivalent to:

    let height = triangle.calculateHeight()
    let area = triangle.base * height / 2
 */
protocol Flyable {
    var airspeedVelocity: Double { get }
}

struct FlappyBird: Bird, Flyable {
    let name: String
    let flappyFrequency: Double
    let flappyAmplitude: Double
    
    var airspeedVelocity: Double {
        return 3 * flappyFrequency * flappyAmplitude
    }
}

struct Penguin: Bird {
    let name: String
}

struct SwiftBird: Bird, Flyable {
    var name: String {
        return "Swift \(version)"
    }
    let version: Double
    
    var airspeedVelocity: Double {
        return version * 1000.0
    }
}

enum UnladenSwallow: Bird, Flyable {
    case african, european, unknown
    
    var name: String {
        switch self {
        case .african:
            return "African"
        case .european:
            return "European"
        case .unknown:
            return "What do you mean? African or European?"
        }
    }
    
    var airspeedVelocity: Double {
        switch self {
        case .african:
            return 10.0
        case .european:
            return 9.9
        case .unknown:
            fatalError("You are thrown from the bridge of death!")
        }
    }
}

extension UnladenSwallow {
    var canFly: Bool {
        return self != .unknown
    }
}

UnladenSwallow.african
UnladenSwallow.african.canFly.description

// Another class
class Motorcycle {
    init(name: String) {
        self.name = name
        speed = 200
    }
    var name: String
    var speed: Double
}

// Bring it together
protocol Racer {
    var speed: Double { get }  // speed is the only thing racers care about
}

extension FlappyBird: Racer {
    var speed: Double {
        return airspeedVelocity
    }
}

extension SwiftBird: Racer {
    var speed: Double {
        return airspeedVelocity
    }
}

// MARK: - dcjdcn
extension Penguin: Racer {
    var speed: Double {
        return 42  // full waddle speed
    }
}

extension UnladenSwallow: Racer {
    var speed: Double {
        return canFly ? airspeedVelocity : 0
    }
}

extension Motorcycle: Racer {}

let racers: [Racer] =
    [UnladenSwallow.african,
     UnladenSwallow.european,
     UnladenSwallow.unknown,
     Penguin(name: "King Penguin"),
     SwiftBird(version: 3.0),
     FlappyBird(name: "Felipe", flappyFrequency: 20.0, flappyAmplitude: 3.0),
     Motorcycle(name: "Giacomo")
]

/// Returns the magnitude of a vector in three dimensions
/// from the given components.
///
/// You want to discuss? Discuss lah!
///
/// - Parameters:
///     - racers: hbvhdsb
func topSpeed(of racers: [Racer]) -> Double {
    return racers.max(by: { $0.speed < $1.speed })?.speed ?? 0
}

topSpeed(of: racers) // 3000
```