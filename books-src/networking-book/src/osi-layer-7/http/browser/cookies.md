# Cookies

**Background**

HTTP is stateless, but some applications want to have state, so they use cookies (because cookies ‘persist between calls’ ish)

Cookies are unique string identifiers that can be stored on the client’s browser to keep track of client’s state (for the purpose of logging in, serving customised content). 

**Setting cookies**

They are set by the server through HTTP headers. 

```
Set cookie: session=44ecb091; path=/servlets
```

**Cookie data**

- Website’s domain
- String value of cookie
- Date that cookie expires

**Request**

For any HTTP calls to that domain, the browser automatically attaches any cookies bounded to a domain

~~~admonish warning
This is exploitable.
~~~

~~~admonish note title="3rd party cookies"
Note: 3rd party cookies are cookies set for domains that are not being visited. Blocking them is not enough due to several workarounds like respawning cookies etc.
~~~
