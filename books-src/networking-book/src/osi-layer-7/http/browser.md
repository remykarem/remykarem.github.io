# Browser

The browser is an HTTP client.

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
