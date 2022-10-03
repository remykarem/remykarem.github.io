# Sealed class

Sealed classes are like enums with data.

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

Sealed classes in Kotlin is very similar to Rust's enums. Here is the Rust equivalent of the Kotlin code above.

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
