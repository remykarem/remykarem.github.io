# State

An object can behave differently based on a finite number of states. In your code, you might use **condiitional logic** or **switch statements** to handle a bunch of possibleilties based on state/data.

Related to finite state machines.

```tsx
interface State {
	think(): string;
}

class HappyState implements State {
	think() {
		return 'I am happy';
	}
}

class SadState implements State {
	think() {
		return 'I am sad';
	}
}

class AngryState implements State {
	think() {
		return 'I am angry';
	}
}
```
