# TOTP

Time-based/HMAC-based One-Time Password

$$
(\text{time}, \text{key}) \rightarrow \text{otp}
$$

The underlying cryptographic primitive used here is the **HMAC**. (Notice that this function is similar to HMAC anyways.)

```admonish note
Because OTP relies on time, the client's device and the server should be roughly synchronised.
```
