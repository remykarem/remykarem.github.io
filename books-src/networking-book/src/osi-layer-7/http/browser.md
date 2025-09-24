# Browser

The browser is an HTTP client.

- For any HTTP calls to that domain, the browser automatically attaches any cookies bounded to a domain
- HTTP is stateless, but some applications want to have state, so they use cookies (because cookies ‘persist between calls’ ish)

~~~admonish note title="Assets"
(eg. documents, CSS, JavaScript)
~~~

~~~admonish note title="Frame"
???
~~~

~~~admonish note title="MIME-sniffing"
MIME-sniffing happens (for some web browsers) to determine the content of an asset. Specific to IE and Chrome. With clever naming, a resource can be determined to be an HTML document which has malicious script.
~~~

## HTTP client APIs

There are 2 types: synchronous (requires the user to wait and the whole page to be reloaded to see the result of submission) and asynchronous (uses JavaScript; also called AJAX)

There are 3 APIS:

* **Form submission** — synchronous; traditional

  ~~~admonish note
  The HTTP Content-Type header is usually `application/x-www-form-urlencoded` or `application/form-data`. 
  ~~~
  
* **XHR** — asynchronous; modern

  ~~~admonish note
  The HTTP Content-Type header is usually `application/json`. 
  ~~~
* **Fetch API** — asynchronous; more modern

  ~~~admonish note
  The HTTP Content-Type header is usually `application/json`. 
  ~~~

  ~~~admonish tip
  Fetch API is usually categorised under "XHR" in the network tab. Misnomer.
  ~~~

## Cookies

Browser automatically sends "global" cookies. 

Cookies are unique string identifiers that can be stored on the client’s browser to keep track of client’s state (for the purpose of logging in, serving customised content). They are set by the server through HTTP headers. After the cookie is set, it’s sent along with subsequent HTTP requests to the same server to allow the server to know who is contacting it.

Things involved in the process of setting and using cookies: HTTP request, HTTP response, cookie file on the client’s browser and the database of cookie-user values on the server

Cookie file contains:

- Website’s domain
- String value of cookie
- Date that cookie expires

```
Set cookie: session=44ecb091; path=/servlets
```

Note: 3rd party cookies are cookies set for domains that are not being visited. Blocking them is not enough due to several workarounds like respawning cookies etc.

## Basic authentication

By default, when the browser receives

```text
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Restricted"
Content-Length: 0
```

it will display a modal prompting for username and password.

# XMLHttpRequest

- `open(method: string, url: string, async: boolean, ...)`
- `send()`
- —
- `onreadystatechange`
- `readyState`
- —
- `responseText`
- `responseXML`
- `status`
- `statusText`

```jsx
let req = new XMLHttpRequest();
req.open('GET', '/my/url', true);
req.send();
```

```jsx
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

```jsx
var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);
```

```jsx
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

# Fetch API

```jsx
fetch(url)
	.then(resp => resp.json())
	.then(data => console.log(data)); // you can assign here

```

# DOM API

Document Object Model

![https://gabrieltanner.org/blog/javascript-dom-introduction](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7d722410-6eb6-4685-98d9-99425c509bc2/Untitled.png)

https://gabrieltanner.org/blog/javascript-dom-introduction

```jsx
document.getElementById("header-title");
document.getElementsByClassName("list-items");
document.getElementsByTagName("li");

document.querySelector("#header-title");
document.querySelector(".list-items");
document.querySelector("li");
```

```jsx
document.createElement("div");
var newContent = document.createTextNode("Hello World!"); 
div.appendChild(newContent);
document.body.insertBefore(div, currentDiv);
```

**`Element`**

(html attributes)

- `innerHtml`
- `innerText`
- `src`
- `style`
- `tagName` (in caps)

(accessing nodes)

- `parentNode`
- `childNodes`
- `firstChild`
- `lastChild`
- `nextSibling`

(add nodes)

- `insertBefore`

(remove)

- `remove` (this)
- `removeChild`

(event listeners)

- `addEventListener`

    ```jsx
    htmlElement.addEventListener('click', () => { console.log('sdfv) })
    ```

  events:

  - click
  - dblclick
- `removeEventListener`

# IndexedDB

# Web Speech API

https://www.google.com/intl/en/chrome/demos/speech.html

# https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/

- SOP & CORS only applies to browser!

# Origin

Origin = protocol + host/domain + port ≈ url

# Same-origin policy

A **browser** security policy that restricts on-page scripts from accessing or posting data to resources ("resource sharing") from a different origin other than the current page's origin ("cross-origin").

<aside>
💡 Note that resources like third-party libraries and images etc. are fine because **they are linked from the document source**.

</aside>

One method of accessing cross-origin resources is CORS.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/267d8765-6379-44fc-b800-33ef4268fcc9/Untitled.png)

- Code

    ```bash
    st=>start: Start
    
    simpleRequest0=>operation: GET
    /endpoint
    simpleRequest=>operation: GET
    /endpoint
    simpleRequest2=>operation: GET
    /endpoint
    preflightedRequest=>operation: OPTIONS
    /endpoint
    corsReject=>operation: CORS reject
    noop=>operation: .
    
    sameOrigin=>condition: Same origin?
    embedding=>condition: Cross-origin 
    embedding?
    <img> <video>
    write=>condition: Cross-origin 
    write?
    isSimpleVerb=>condition: GET/POST/
    HEAD?
    isSimpleContentType=>condition: application/
       x-www-form-urlencoded
    multipart/form-data
    text/plain?
    hasNoExtraHeaders=>condition: No extra headers?
    optionsOk=>condition: Check response
    access-control-
    allow-[methods,
    origin,credentials]
    
    st->sameOrigin
    sameOrigin(yes)->simpleRequest0
    sameOrigin(no)->embedding
    embedding(yes)->simpleRequest
    embedding(no)->write
    write(yes)->isSimpleVerb
    write(no)->corsReject
    isSimpleVerb(yes)->isSimpleContentType
    isSimpleContentType(yes)->hasNoExtraHeaders
    
    isSimpleVerb(no@no; preflighted)->preflightedRequest
    isSimpleContentType(no@no; preflighted)->preflightedRequest
    hasNoExtraHeaders(no@no; preflighted)->preflightedRequest
    
    preflightedRequest->optionsOk
    optionsOk(yes@ok)->simpleRequest2
    optionsOk(no@violated)->corsReject
    
    hasNoExtraHeaders(yes@yes; simple)->noop->simpleRequest2
    ```


# CORS

Cross-origin resource sharing

For a successful cross-origin resource sharing,

1. Proper response headers from the server

    ```bash
    Access-Control-Allow-Origin: *
    ```

2. Proper request headers from the client

A CORS preflight request is a CORS request that checks to see if the CORS protocol is understood and server is aware using specific methods and headers. It is an `OPTIONS` request.

Request:

```
Access-Control-Request-Method: **GET** (the actual request is a GET)
Access-Control-Request-Headers: ...
Origin: ...
```

Response:

```
Access-Control-Allow-Origin: ...
Access-Control-Allow-Methods: ...
Access-Control-Allow-Headers: ...
Access-Control-Max-Age: ...
```