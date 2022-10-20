# MAC

HMAC

Message Authentication Code, aka "keyed hash functions"

Hash-based Message Authentication Code

```tsx
generateMac(mac_key, message) -> auth_code
```

```tsx
generateHmac(mac_key, message, hash_function) -> auth_code
```

where `hash_function` can be any cryptographic hash function

Me

---

```tsx
**mac_key** = generateMacKey()
```

Send you the **mac_key**

```tsx
auth_code = generateMac(**mac_key**, message)
```

Send you (auth_code, message)

You

---

Got the **mac_key**

Got the (auth_code, message)

```tsx
generateMac(**mac_key**, message) == code
```
