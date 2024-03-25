# Webhook vs. polling

|                        | Webhook         | Polling / REST API |
|------------------------|-----------------|--------------------|
| Frequency              | As needed       | Very frequent      |
| Payload                | Smaller         | Higher             |
| Near real-time updates | Yes             | No                 |
| Loss of events         | Events are retried and usually persisted thereafter | Client might miss them due to incorrect request or missed call; persistence is overridden etc. |
| Validation | Can validate response | Hard to validate response (like... how?) |

References:
* [GitHub: Choosing webhooks or the REST API](https://docs.github.com/en/webhooks/about-webhooks#choosing-webhooks-or-the-rest-api)

