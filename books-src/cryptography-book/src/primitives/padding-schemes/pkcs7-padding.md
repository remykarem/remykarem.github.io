# PKCS #7 padding

[RFC 2315](https://datatracker.ietf.org/doc/html/rfc2315), PKCS #7

A _block_ padding scheme that pads the data with the hexadecimal value `xx` where `xx` is the number of bytes to fill up.

~~~admonish example
If there are 10 bytes to fill up, then the padding should be

```
.. .. .. 0a 0a 0a 0a 0a 0a 0a 0a 0a 0a
         <----------10 bytes--------->
```
~~~

~~~admonish note
PKCS #7 padding is an extension of the [PKCS #5 padding](pkcs5-padding.md) scheme.
~~~
