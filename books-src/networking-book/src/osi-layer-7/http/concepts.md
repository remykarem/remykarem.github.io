# Concepts

## Origin

scheme + host + port

| Name  | Age | Same/diff |
|-------|-----|--|
| https://a.example.com | https://a.example.com | ✅ |
| https://a.example.com | https://b.example.com | Diff |
| https://a.example.com:8080 | https://a.example.com:443 | ❌ |

## Site

Site = scheme + registrable domain

| Name  | Age | Same/diff |
|-------|-----|--|
| https://a.example.com | https://a.example.com | ✅ |
| https://a.example.com | https://b.example.com | ✅ |
| https://a.example.com:8080 | https://a.example.com:443 | ✅ |

## State

* Stateless
* Stateful
