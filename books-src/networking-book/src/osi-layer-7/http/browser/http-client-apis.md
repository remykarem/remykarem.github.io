# HTTP client APIs

There are 2 types: synchronous (requires the user to wait and the whole page to be reloaded to see the result of submission) and asynchronous (uses JavaScript; also called AJAX)

There are 3 APIS:
* Form submission
* XHR
* Fetch

## Form submission

synchronous; traditional

~~~admonish note
The HTTP Content-Type header is usually `application/x-www-form-urlencoded` or `application/form-data`. 
~~~
  
## XHR

(XMLHttpRequest) — asynchronous; modern

~~~admonish note
The HTTP Content-Type header is usually `application/json`. 
~~~

```js
let req = new XMLHttpRequest();
req.open('GET', '/my/url', true);
req.send();
```

```js
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
```

```js
var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);
```

```js
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var resp = this.response;
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
```


## Fetch API

asynchronous; more modern

```js
fetch(url)
	.then(resp => resp.json())
	.then(data => console.log(data)); // you can assign here
```

~~~admonish note
The HTTP Content-Type header is usually `application/json`. 
~~~

~~~admonish tip
Fetch API is usually categorised under "XHR" in the network tab. Misnomer.
~~~

