# Singleton

Having only one instance of a class.

~~~admonish example title="Spring Boot"
By default, Spring beans are singletons within the application context.
~~~

~~~admonish example title="Kotlin"
```kotlin
object SomeSingleton { }
```
~~~

~~~admonish example title="TypeScript"
Using `class`
    
```ts
class Settings {

	static instance: Settings;

	// prevent new
	private constructor() {}

	static getInstance(): Settings {
		if (!Settings.instance) {
			Settings.instance = new Settings();
		}
		return Settings.instance;
	}

}
```
~~~
    
~~~admonish example title="TypeScript"
Using object literals
    
```ts
const settings = {
	dark: true
}
```
~~~
