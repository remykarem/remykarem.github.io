# API performance

* Pagination
  * Cursor-based: GET /orders?cursor=xxx
  * Page-based: GET /items?page=2&size=3
 
    ~~~admonish tip title="Page or offset"
    "Page" is a client-facing abstraction whereas "offset" is the actual SQL mechanism.
    ~~~
    
  * Key-based: GET /items?after_id=102&limit=3
  * Time-based: GET /items?start_time=xxx&end_time=yyy

  Source: blog.bytebytego.com

* Asynchronous logging
* Database connection pooling
* Request caching
* Payload compression

[https://rapidapi.com/comics/improving-api-performance](https://rapidapi.com/comics/improving-api-performance)
