# Observer

One-to-many

Usages: event handling, async programming

~~~admonish example title="Spring Boot"
Spring Boot has a built-in event system.

* `@EventListener`
~~~

~~~admonish example title="Angular.js"
- Subject
    - observers: List<Observer>
    - notify()
    - attach(Observer)
- Observer
    - subject: Subject
    - update()

- **Observable** / subject / service / publisher
    - subscribe((Observer)→...) → Subscription
    - @classmethod of()
- **Observer** / subscriber / consumer
    
    *how to handle notifications?*
    
    - next()
    - error()
    - complete()


Every time somebody subscribes to something, there will be a subscription.

- Subscription
    - unsubscribe()

Define some service ("observable") that returns values 1,2,3

```js
const observable = function(observer) {
	observer.next(1);
	observer.next(2);
	observer.next(3);
	observer.complete(); // no more updates

	return {unsubscribe() {}};
}

// or
const observable = of(1,2,3);
```

Usage

```js
// I want to get notifications from this service so that I get these values
// and console log them.
const observer = {
	next: x => console.log('received notification: ' + x),
	error: err => console.log('received error from notification: ' + err),
	complete: () => console.log('nothing else to update'),
}

// I'm gonna subscribe and get a subscription
const subscription = observable.subscribe(observer);

// I've had enough of these notifications, I wanna unsub
subscription.unsubscribe();
```
~~~