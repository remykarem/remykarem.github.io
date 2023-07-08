# Facade

Hide **lower-level structures** with a **higher level structure**.

~~~admonish example title="(Tyre, Tank) vs. Car"
Given **low-level structures** `Tyre` and `Tank`:

```kotlin
class Tyre(val pressure: Int)

class Tank(val fuel_level: Int)
```

we define a **higher-level structure** called `Car`:

```kotlin
class Car(
    private val tank: Tank,
    private val tyres: List<Tyre>,
) {
    fun tyre_pressures() -> List<Int> {
        return tyres.map { it.pressure }
    }

    fun fuel_level() -> Int {
        return tank.fuel_level
    }
}
```
~~~
