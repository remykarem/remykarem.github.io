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

There are 2 types: synchronous and asynchronous (uses JavaScript; also called AJAX)

* **Form submission** — synchronous (requires the user to wait and the whole page to be reloaded to see the result of submission); traditional

  ~~~admonish note
  The HTTP Content-Type header is usually `application/x-www-form-urlencoded` or `application/form-data`. 
  ~~~
  
* **XHR** — asynchronous (uses JavaScript); modern

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
