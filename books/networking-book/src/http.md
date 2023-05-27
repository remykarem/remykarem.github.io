# HTTP

**Cookie**

Cookies are unique string identifiers that can be stored on the client’s browser to keep track of client’s state (for the purpose of logging in, serving customised content). They are set by the server through HTTP headers. After the cookie is set, it’s sent along with subsequent HTTP requests to the same server to allow the server to know who is contacting it.

Things involved in the process of setting and using cookies: HTTP request, HTTP response, cookie file on the client’s browser and the database of cookie-user values on the server

Cookie file contains:

- Website’s domain
- String value of cookie
- Date that cookie expires

Set cookie: session=44ecb091; path=/servlets

Note: 3rd party cookies are cookies set for domains that are not being visited. Blocking them is not enough due to several workarounds like respawning cookies etc.

Safari: Preferences > Privacy

Chrome: DevTools > Application > Storage > Cookies

# HTTP clients

browser, cURL, postman, XMLHTTPRequest API, Fetch API

# **Reliance on TCP**

HTTP uses TCP as its underlying transport protocol so that messages are guaranteed to get delivered in order. A connection must first be made.

# **HTTP status codes**

- 200 OK - request successfully processed
- 301 - moved permanently
- 403 Forbidden - server denied access to resource
- 400 Bad Request - request is malformed
- 401 Unauthorised - request requires authentication
- 404 Not Found - resource is invalid and does not exist on the server
- 500 Internal Server Error
- 503 Service Unavailable - server overloaded or internal system of server has faile

## Content Security Policy