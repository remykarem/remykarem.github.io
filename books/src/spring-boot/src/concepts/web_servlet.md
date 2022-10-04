# Web servlet

## Web server, servlet, servlet container

**Web server** — handles HTTP requests and response

Examples: Apache Tomcat

**Servlet containers** — manages components like Java servlets. Part of the web server

Examples: Apache Tomcat

`ServletContext`

**Servlet** (`javax.servlet.Servlet`) — A Java interface that runs within a web server. Servlets receive and respond to requests from Web clients, usually across HTTP.

(”low-level request handling”)

Lifecycle of a servlet:

1. init
    
    ```kotlin
    fun init()
    ```
    
2. service — called by the servlet container to handle requests from the client
    
    ```kotlin
    fun service(request: ServletRequest, response: ServletResponse)
    ```
    
3. destroy — called by the servlet container once all threads within the service have eexited, or after a timeout period has passed.
    
    ```kotlin
    fun destroy()
    ```
    

What happens?

1. Client sends a request
2. Container creates a new object `HttpServletRequest` and `HttpServletResponse`
3. Container passes these to `Servlet.service`
