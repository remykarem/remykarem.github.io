# Base64

Encodes binary to text in blocks of 6 bits

There are variants to this encoding:
1. Standard (`+`, `/`) or URL-safe (`-`, `_`)
2. Padded or not padded (with `=` if needed)

For example, JWTs are URL-safe base64 encoded with no padding.

See also the [base64 crate](https://docs.rs/base64/latest/base64/).

~~~admonish example title="Real world"
AWS DynamoDB[^aws] recommends Base64 for encoding binary data.
~~~

---

[^aws]: [AWS DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html)
