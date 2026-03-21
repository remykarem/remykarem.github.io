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


## DOM API

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

## IndexedDB

## Web Speech API

https://www.google.com/intl/en/chrome/demos/speech.html



## CORS

https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/

- SOP & CORS only applies to browser!


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
