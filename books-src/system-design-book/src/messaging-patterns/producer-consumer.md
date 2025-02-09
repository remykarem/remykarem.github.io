# Producer/Consumer

There is only 1 intended recipient for every message.

1. The **producer** sends a **message** to a specific location (eg. buffer or queue). 
2. The **consumer** retrieves the message from this location.

```admonish note
A message is consumed by _one consumer_.
```

Examples of AWS services:
* SQS
