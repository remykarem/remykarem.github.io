# TOTP

Time-based/HMAC-based One-Time Password

$$
(\text{time}, \text{key}) \rightarrow \text{otp}
$$

Because OTP relies on time, the client's device and the server should be roughly synchronised.

The cryptographic primitive used here is the **HMAC**.
