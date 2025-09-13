# CDN

Content Delivery Network

A set of distributed servers (known as **edge servers**) work together to efficiently deliver Internet content, improving loading speed and reliability.

Responsibilities:
* **[Serve static content](../core-functionalities/static-hosting.md) via** [**caching**](../strategies/caching.md)

Features:
* Integration with origin server (eg. AWS CloudFront; AWS S3, API Gateway)
* Lightweight [authentication](../core-functionalities/authentication.md)
* Lightweight request/response transformation/manipulation/validation

~~~admonish example
AWS CloudFront
~~~

Design:
* [Distributed](../strategies/distributed.md)
