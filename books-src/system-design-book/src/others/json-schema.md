# JSON schema

Example:

~~~json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "The name of the person."
        },
        "age": {
            "type": "integer",
            "description": "The age of the person."
        }
    },
    "required": ["name"]
}
~~~

Example JSON:

```json
{
  "name": "Alice",
  "age": 30
}
```
