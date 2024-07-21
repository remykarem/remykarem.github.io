# Directory traversal

aka Path Traversal

This is a form of an HTTP exploit in which an attacker attempts to access all the different resources.

The aim is generally to access sensitive resources like password files, system files, or any other data that could be used to exploit the system further.

Examples:

```
http://example.com/app/.env
```

Spring-related

```
http://example.com/app/application.yml
```

```
.../swagger-ui/index.html
```
