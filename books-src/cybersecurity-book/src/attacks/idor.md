# IDOR

Insecure direct object referencing

This happens when an application
* exposes internal implementation objects (eg. application ID, customer ID), AND
* does not verify if the request is **authorised to access**

~~~admonish question title="What about UUIDs?"
UUIDs provide _obscurity_, not security.

An attacker can still get a valid UUID via other means like
* enumeration
* leakage
* other users sharing them
~~~

Example:

https://insecure-website.com/customer_account?customer_number=132355
