# Sealed class

Sealed classes are a powerful feature in Kotlin. They are akin to the types in Rust and Haskell ecosystem.

A sealed class is idiomatically used as an enum with arbitrary data structures.

```kotlin
sealed class Employee {
	data class Manager(val name: String, val age: Int): Employee()
	data class SeniorDev(val name: String): Employee()
}

fun main() {
	val employee: Employee = Employee.SeniorDev("Jonah")
	when (employee) {
		is Employee.Manager -> println("Manager: ${employee.name}, Age: ${employee.age}")
		is Employee.SeniorDev -> println("SeniorDev: ${employee.name}")
	}
}
```

Here is the Rust equivalent of the Kotlin code above.

```Rust
enum Employee {
    Manager { name: String, age: u8 },
    SeniorDev { name: String },
}

fn main() {
    let employee = Employee::SeniorDev { name: "Jonah".to_string() };
    match employee {
        Employee::Manager { name, age } => println!("Manager: {}, Age: {}", name, age),
        Employee::SeniorDev { name } => println!("SeniorDev: {}", name),
    }
}
```

Sealed classes is an exciting feature because it gives programmers more flexibility in modelling data.
