# API performance

* Pagination
  * Offset-based: GET /orders?offset=0&limit=3
  * Cursor-based: GET /orders?cursor=xxx
  * Page-based: GET /items?page=2&size=3
  * Key-based: GET /items?after_id=102&limit=3
  * Time-based: GET /items?start_time=xxx&end_time=yyy

  Source: blog.bytebytego.com

  ![Pagination](https://ci3.googleusercontent.com/meips/ADKq_NaAdzpLLlawFHiQ0CWupNvczezDrof9uOMhDVl6BgqjHd-Tf9ccvmRbh0MsFa99cpUzwC_6weKQgfG6ak-BjbntHsq0Bqm37sXsVe7OiTSCcjk3nwIUqdqv2ObqG1_GDzNvEv3xQnJx4Ti0wnj2AR3Xo4N7cf9zzurSyca0XwaPlPq2yFjzMWOsJXkSbOCpojl9Pxo4dlPD7p2Lc0NOS6H6QBXED5Hw-DRaDDVDzTDuP408BS3yKDN5alQN4aQ9MB7e3kVnl4OiOWfgEg3lb8klePftW9qBmEt6Z59Dscs=s0-d-e1-ft#https://substackcdn.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1ec91193-f890-4942-bb23-21f706d9524a_1306x1536.gif)

* Asynchronous logging
* Database connection pooling
* Request caching
* Payload compression

[https://rapidapi.com/comics/improving-api-performance](https://rapidapi.com/comics/improving-api-performance)
